import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shijay.dev"),
  title: "Shijay | Full-Stack Developer Portfolio | Code Hard, Ride Free",
  description:
    "Freelance full-stack developer specializing in Laravel, React, and Next.js. Building AI-powered web apps and enterprise solutions. Explore my portfolio of CropWise v2, SAGIP, and Blaze-Dispatch projects.",
  keywords: [
    "full-stack developer",
    "freelance developer",
    "Laravel developer",
    "React developer",
    "Next.js developer",
    "web development",
    "San Pablo Laguna",
    "Philippines",
    "portfolio",
    "AI developer",
    "machine learning",
    "responsive design",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Marc Ciejay Macaraig",
      url: "https://shijay.dev",
    },
  ],
  creator: "Marc Ciejay Macaraig",
  publisher: "Shijay",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://shijay.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shijay.dev",
    title: "Shijay | Full-Stack Developer Portfolio",
    description:
      "Freelance full-stack developer specializing in Laravel, React, and Next.js. AI-powered solutions for enterprise and startups.",
    siteName: "Shijay",
    images: [
      {
        url: "https://shijay.dev/images/profile3.jpg",
        width: 1200,
        height: 630,
        alt: "Marc Ciejay Macaraig - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shijay | Full-Stack Developer",
    description:
      "Freelance full-stack developer building web apps with Laravel, React & Next.js",
    creator: "@ciejayy_",
    images: ["https://shijay.dev/images/profile3.jpg"],
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  category: "Technology",
  classification: "Portfolio",
  formatDetection: {
    email: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
