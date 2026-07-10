import { chromium } from "playwright";

const browser = await chromium.launch();

// Desktop: about, approach, services
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3001/", { waitUntil: "networkidle" });
const skip = page.getByRole("button", { name: /skip intro/i });
if (await skip.isVisible().catch(() => false)) await skip.click();
await page.waitForTimeout(1500);

for (const anchor of ["#about", "#approach", "#services"]) {
  await page.evaluate((sel) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: "instant", block: "start" });
    window.scrollBy(0, -50);
  }, anchor);
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `shots/3${anchor.replace("#", "-")}.png` });
}

// Approach row 2 (included visual)
await page.evaluate(() => {
  const el = document.querySelector("#approach");
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 700);
});
await page.waitForTimeout(1500);
await page.screenshot({ path: "shots/3-approach-2.png" });

// FAQ page
await page.goto("http://localhost:3001/faq", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
await page.screenshot({ path: "shots/3-faq-page.png" });

// Mobile about section
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3001/", { waitUntil: "networkidle" });
const skipM = mobile.getByRole("button", { name: /skip intro/i });
if (await skipM.isVisible().catch(() => false)) await skipM.click();
await mobile.waitForTimeout(1500);
await mobile.evaluate(() => {
  document.querySelector("#about")?.scrollIntoView({ behavior: "instant", block: "start" });
  window.scrollBy(0, -40);
});
await mobile.waitForTimeout(1600);
await mobile.screenshot({ path: "shots/3-about-mobile.png" });

await browser.close();
console.log("done");
