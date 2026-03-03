import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/seo/LocalBusiness";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Volta Environmental Services | Pet Waste Removal New Brunswick",
    template: "%s | Volta Environmental Services",
  },
  description:
    "Professional pet waste removal & yard cleanup in New Brunswick. Weekly, bi-weekly & monthly plans starting at $25. Eco-friendly, reliable service. Get a free quote today!",
  keywords: [
    "pet waste removal",
    "dog poop cleanup",
    "yard cleanup",
    "New Brunswick",
    "New Brunswick",
    "poop scooping service",
    "commercial property cleanup",
    "junk removal New Brunswick",
  ],
  metadataBase: new URL("https://voltaenvironmental.ca"),
  openGraph: {
    title: "Volta Environmental Services | Pet Waste Removal New Brunswick",
    description:
      "Professional pet waste removal & yard cleanup in New Brunswick. Plans starting at $25/visit. Get a free quote!",
    url: "https://voltaenvironmental.ca",
    siteName: "Volta Environmental Services",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
