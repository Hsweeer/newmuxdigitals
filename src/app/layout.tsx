import type { Metadata } from "next";
import { Inter, Fragment_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fragment",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  style: ["italic"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "MuxDigitals | Software Development & Business Automation",
    description:
      "We build the software your business runs on and the automation that keeps it running. One senior team, start to finish.",
  }),
  icons: { icon: "/MuxDigital-2.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fragmentMono.variable} ${sourceSerif.variable} antialiased`}>
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
