import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3001/", { waitUntil: "networkidle" });

// Capture the intro preloader first
await page.waitForTimeout(1200);
await page.screenshot({ path: "shots/0-preloader.png" });

// Skip the intro
const skip = page.getByRole("button", { name: /skip intro/i });
if (await skip.isVisible().catch(() => false)) await skip.click();
await page.waitForTimeout(2200);
await page.screenshot({ path: "shots/1-hero.png" });

const anchors = ["#about", "#approach", "#work", "#services", "#testimonials", "#faq", "#contact"];
for (const anchor of anchors) {
  await page.evaluate((sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: "instant", block: "start" });
    window.scrollBy(0, -60);
  }, anchor);
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `shots/2${anchor.replace("#", "-")}.png` });
}

// Mobile view
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3001/", { waitUntil: "networkidle" });
await mobile.waitForTimeout(1000);
const skipM = mobile.getByRole("button", { name: /skip intro/i });
if (await skipM.isVisible().catch(() => false)) await skipM.click();
await mobile.waitForTimeout(2200);
await mobile.screenshot({ path: "shots/3-mobile-hero.png" });

await browser.close();
console.log("done");
