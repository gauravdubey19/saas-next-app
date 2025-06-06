import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoLearnion | Real-time AI Teaching Platform",
  description:
    "Learn faster with GoLearnion - an interactive AI-powered teaching platform that provides personalized learning experiences in real-time.",
  keywords:
    "AI teaching, real-time learning, personalized education, online learning platform, AI tutor",
  authors: [{ name: "GoLearnion Team" }],
  creator: "GoLearnion",
  publisher: "GoLearnion",
  openGraph: {
    title: "GoLearnion | Real-time AI Teaching Platform",
    description:
      "Learn faster with GoLearnion - an interactive AI-powered teaching platform that provides personalized learning experiences in real-time.",
    url: "https://golearnion.vercel.app",
    siteName: "GoLearnion",
    images: [
      {
        url: "https://golearnion.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GoLearnion - AI Teaching Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoLearnion | Real-time AI Teaching Platform",
    description:
      "Learn faster with GoLearnion - an interactive AI-powered teaching platform that provides personalized learning experiences in real-time.",
    images: ["https://golearnion.vercel.app/twitter-image.jpg"], // Replace with your actual Twitter image path
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#fe5933", // Using your brand color from ClerkProvider
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "./favicon.ico",
    apple: "/apple-icon.png", // Add this file to your public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
          <Navbar />
          <Toaster richColors closeButton />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
