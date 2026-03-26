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

export async function POST(request: NextRequest) {
  try {
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
