import Home from "@/components/Home";
import { createMetadata, SITE } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "MuxDigitals | Mux Digital — Software Development & Business Automation",
  description: SITE.description,
  path: "/",
});

export default function Page() {
  return <Home />;
}
