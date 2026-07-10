import Navbar from "@/components/Navbar";
import ServicesPageContent from "@/components/ServicesPageContent";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "What We Do | MuxDigitals",
  description:
    "Software development, product design, and business automation, built to help your business run better and grow faster.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Navbar />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
}
