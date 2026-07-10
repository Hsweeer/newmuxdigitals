import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Frequently Asked Questions | MuxDigitals",
  description:
    "Answers on pricing, timelines, and how we work with founders and business owners.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <Navbar />
      <main className="bg-paper pt-16 sm:pt-20">
        <Faq />
      </main>
      <Footer />
    </>
  );
}
