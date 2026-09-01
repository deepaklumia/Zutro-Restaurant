import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Zutro Restaurant & Lounge | Le Méridien Houston Downtown",
  description:
    "Experience elevated American fine dining, handcrafted craft cocktails, and unforgettable hospitality inside Le Méridien Houston Downtown. Join us for Breakfast, Lunch, Dinner, and daily Sparkling Hour (4 PM–7 PM).",
  keywords: [
    "Zutro Restaurant",
    "Le Méridien Houston Downtown",
    "Downtown Houston Dining",
    "Houston Fine Dining",
    "Sparkling Hour Houston",
    "Craft Cocktails Houston",
    "Private Dining Houston",
    "American Cuisine Houston",
  ],
  authors: [{ name: "Zutro Restaurant & Lounge" }],
  creator: "Zutro Restaurant & Lounge",
  openGraph: {
    title: "Zutro Restaurant & Lounge | Downtown Houston Fine Dining",
    description:
      "Nestled inside Le Méridien Houston Downtown, Zutro offers modern American cuisine, artisanal cocktails, and European-inspired hospitality.",
    url: "https://zutrorestaurant.com",
    siteName: "Zutro Restaurant & Lounge",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Zutro Restaurant & Lounge Interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zutro Restaurant & Lounge | Le Méridien Houston Downtown",
    description:
      "Modern American cuisine, craft cocktails & daily Sparkling Hour in Downtown Houston.",
    images: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Zutro Restaurant & Lounge",
  image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
  "@id": "https://zutrorestaurant.com",
  url: "https://zutrorestaurant.com",
  telephone: "+1-713-221-0011",
  priceRange: "$$$$",
  menu: "https://zutrorestaurant.com#menu",
  servesCuisine: "Modern American",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1121 Walker Street",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77002",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7565,
    longitude: -95.3638,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "06:30",
      closes: "11:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "16:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:30",
      closes: "22:00",
    },
  ],
  containedInPlace: {
    "@type": "Hotel",
    name: "Le Méridien Houston Downtown",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-zutro-black text-zutro-cream antialiased selection:bg-zutro-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
