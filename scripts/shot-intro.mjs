import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3001/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(1400);
await page.screenshot({ path: "shots/0-preloader-mid.png" });
await page.waitForTimeout(800);
await page.screenshot({ path: "shots/0-preloader-late.png" });
await browser.close();
console.log("done");
