import Home from "@/components/Home";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "MuxDigitals | Software Development & Business Automation",
  description:
    "We build the software your business runs on and the automation that keeps it running. One senior team, start to finish.",
  path: "/",
});

export default function Page() {
  return <Home />;
}
