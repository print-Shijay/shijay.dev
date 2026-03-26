import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Create a Nodemailer transporter using Gmail
// You need to set up environment variables:
// GMAIL_USER=your-email@gmail.com
// GMAIL_APP_PASSWORD=your-app-specific-password
// (Get an app password from: https://myaccount.google.com/apppasswords)

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIdentifier(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) {
      return firstIp;
    }
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }

  return "unknown-client";
}

function checkRateLimit(clientId: string): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const current = rateLimitStore.get(clientId);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSeconds = Math.ceil((current.resetAt - now) / 1000);
    return { allowed: false, retryAfterSeconds };
  }

  rateLimitStore.set(clientId, {
    count: current.count + 1,
    resetAt: current.resetAt,
  });

  return { allowed: true, retryAfterSeconds: 0 };
}

function cleanupExpiredRateLimitEntries(): void {
  const now = Date.now();

  for (const [clientId, entry] of rateLimitStore.entries()) {
    if (now > entry.resetAt) {
      rateLimitStore.delete(clientId);
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    cleanupExpiredRateLimitEntries();
    const clientId = getClientIdentifier(request);
    const rateLimit = checkRateLimit(clientId);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          message: `Too many messages sent. Please try again in ${rateLimit.retryAfterSeconds} seconds.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSeconds),
          },
        },
      );
    }

    const body: EmailRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check if Gmail credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error(
        "Gmail credentials not configured in environment variables",
      );
      return NextResponse.json(
        {
          message:
            "Email service is not configured. Please contact the site owner.",
        },
        { status: 500 },
      );
    }

    // Send email to your Gmail inbox
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "macaraigmarcciejay@gmail.com",
      replyTo: body.email,
      subject: `New Portfolio Inquiry: ${body.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(body.subject)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(body.message).replace(/\n/g, "<br />")}</p>
      `,
      text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Subject: ${body.subject}

Message:
${body.message}
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Failed to send email. Please try again later.",
      },
      { status: 500 },
    );
  }
}

// Helper function to escape HTML special characters
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
