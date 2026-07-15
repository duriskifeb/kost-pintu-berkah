import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kos Pintu Berkah – Hunian Nyaman & Strategis di Gempol, Pasuruan",
  description:
    "Kos Pintu Berkah – tempat kos nyaman, aman, dan terjangkau di Gempol, Pasuruan. Rating 4.73 ⭐ Google. Dekat pasar, keramaian, akses mudah ke segala keperluan.",
  keywords: [
    "kos gempol", "kos pasuruan", "kos murah gempol", "kost gempol pasuruan",
    "kos pintu berkah", "kos bulusari", "kost putra putri gempol", "sewa kamar gempol"
  ],
  authors: [{ name: "Kos Pintu Berkah" }],
  creator: "Kos Pintu Berkah",
  publisher: "Kos Pintu Berkah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kos Pintu Berkah – Hunian Nyaman di Gempol",
    description: "Rating 4.73 Google ⭐ – Kos nyaman, aman, harga terjangkau di Gempol Pasuruan. Hubungi 0856-4981-4066",
    url: "https://kospintuberkah.com", // Ganti dengan domain asli nanti
    siteName: "Kos Pintu Berkah",
    images: [
      {
        url: "/kos.jpg", // Akan dibaca oleh bot socmed
        width: 1200,
        height: 630,
        alt: "Fasilitas Kos Pintu Berkah",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kos Pintu Berkah – Hunian Nyaman di Gempol",
    description: "Tempat kos strategis, aman, dan terjangkau di Gempol Pasuruan. Hubungi kami untuk survei!",
    images: ["/kos.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Kos Pintu Berkah",
  "image": "https://kospintuberkah.com/logo.png",
  "@id": "https://maps.app.goo.gl/LYSUe7JoSm6ASYzcA",
  "url": "https://kospintuberkah.com",
  "telephone": "+6285649814066",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jembrung Dua, Bulusari",
    "addressLocality": "Gempol",
    "addressRegion": "Jawa Timur",
    "postalCode": "67155",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.582737023193731,
    "longitude": 112.68605988201305
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "20:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.73",
    "reviewCount": "18"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={font.className}>
      <body>
        {/* Inject JSON-LD untuk Local SEO (Google Maps) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
