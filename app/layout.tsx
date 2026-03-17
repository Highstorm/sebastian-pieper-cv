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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
