import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCallButton from "@/components/layout/FloatingCallButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { EmergencyServiceJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "3F Ambulance Saint-Louis (68) | Transport Médical 24h/24 Trois Frontières",
    template: "%s | 3F Ambulance",
  },
  description:
    "3F Ambulance : ambulance, VSL et taxi conventionné à Saint-Louis (68). Transport médical dans les Trois Frontières et longue distance. Appelez le 06 33 81 40 47.",
  metadataBase: new URL(SITE_CONFIG.domain),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "3F Ambulance - Transport Médical Saint-Louis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <EmergencyServiceJsonLd />
        <Navbar />
        <main id="main-content" className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <FloatingCallButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
