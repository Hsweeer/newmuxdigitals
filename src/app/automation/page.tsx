import Navbar from "@/components/Navbar";
import AutomationPageContent from "@/components/AutomationPageContent";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Business Automation & AI Voice Agents | MuxDigitals",
  description:
    "We build automation that answers calls, qualifies leads, and manages your pipeline around the clock, without adding headcount.",
  path: "/automation/",
});

export default function AutomationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Automation", path: "/automation/" },
        ])}
      />
      <Navbar />
      <main>
        <AutomationPageContent />
      </main>
      <Footer />
    </>
  );
}
