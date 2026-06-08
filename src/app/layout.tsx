import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cpalsandco.com"),
  title: {
    default: "CPALS & Co | Chartered Accountants & Advisory",
    template: "%s | CPALS & Co",
  },
  description:
    "CPALS & Co is a professional Chartered Accountant firm offering comprehensive audit, taxation, GST, accounting, corporate compliance, and business advisory services with a commitment to integrity and excellence.",
  keywords: [
    "chartered accountant",
    "CA firm",
    "audit",
    "taxation",
    "GST",
    "accounting",
    "corporate compliance",
    "business advisory",
    "India",
  ],
  authors: [{ name: "CPALS & Co" }],
  creator: "CPALS & Co",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cpalsandco.com",
    siteName: "CPALS & Co",
    title: "CPALS & Co | Chartered Accountants & Advisory",
    description:
      "Professional Chartered Accountancy, Taxation & Advisory Services with a commitment to professionalism, integrity and client confidentiality.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPALS & Co - Chartered Accountants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPALS & Co | Chartered Accountants & Advisory",
    description:
      "Professional Chartered Accountancy, Taxation & Advisory Services.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
