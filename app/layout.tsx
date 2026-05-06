import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLACKCHERRY IT | THE MONOLITH",
  description: "Architectural IT solutions engineered with surgical precision for the next industrial era.",
  openGraph: {
    title: "BLACKCHERRY IT | THE MONOLITH",
    description: "Architectural IT solutions engineered with surgical precision for the next industrial era.",
    type: "website",
    url: "https://blackcherryit.com",
    siteName: "BlackCherry IT Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLACKCHERRY IT | THE MONOLITH",
    description: "Architectural IT solutions engineered with surgical precision for the next industrial era.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Schema for IT Consulting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "BlackCherry IT Consulting",
              "url": "https://blackcherryit.com",
              "description": "Architectural IT solutions engineered with surgical precision for the next industrial era.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "León",
                "addressRegion": "Guanajuato",
                "addressCountry": "Mexico"
              },
              "sameAs": [
                "https://www.linkedin.com/company/blackcherryit"
              ]
            })
          }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-white relative min-h-screen">
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
