import Navbar from "@/components/Navbar";
import AboutStory from "@/components/AboutStory";
import Team from "@/components/Team";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "About MuxDigitals | Mux Digital Software Studio",
  description:
    "About MuxDigitals (Mux Digital): a senior-led software and automation studio building web apps, mobile apps, and business systems for founders since 2016.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <Navbar />
      <main>
        <AboutStory />
        <Team />
        <Office />
      </main>
      <Footer />
    </>
  );
}
