import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sebastian Pieper — Building what's next",
  description:
    "Principal Project Manager & AI Product Lead. 14+ Jahre Erfahrung an der Schnittstelle von Technologie, Produkt und Organisation.",
  openGraph: {
    title: "Sebastian Pieper — Building what's next",
    description:
      "AI · Agile Product Delivery · Leadership",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sebastian Pieper",
  url: "https://sebastian-pieper.vercel.app",
  jobTitle: "Head of IT",
  worksFor: {
    "@type": "Organization",
    name: "RAPA Automotive",
  },
  description:
    "Senior IT professional specializing in AI strategy, digital transformation, and enterprise IT management.",
  email: "seb@stianpieper.de",
  sameAs: [
    "https://www.linkedin.com/in/sebastian-pieper-selb/",
    "https://ki-beratung.vercel.app",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Digital Transformation",
    "IT Strategy",
    "Agile Methodologies",
    "SAFe",
    "ITIL",
    "Cloud Infrastructure",
    "Enterprise Architecture",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Hochschule Hof",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Selb",
    addressCountry: "DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
