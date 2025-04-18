import { expect, test } from "@playwright/test";
test("frames",async({browser})=>{
let context=await browser.newContext()
let page= await context.newPage()
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await page.locator("//li/section[text()='Frames']").click()
await page.locator("//li//section[text()='iframes']").click()
await page.locator("//li/a[text()='Nested iframe']").click()
let frame1=await page.frameLocator("//iframe[@class='w-full h-96']")
let ema=await frame1.locator("//p[text()='Admin@gmail.com']").textContent()
let pwd=await frame1.locator("(//p[text()='Admin@1234'])[1]").textContent()
let frame2=await frame1.frameLocator("//div[@class='form_container']/iframe")
await frame2.locator("//input[@type='email']").fill(ema)
await frame2.locator("//input[@id='password']").fill(pwd)
await frame2.locator("//input[@id='confirm-password']").fill(pwd)
await frame2.locator("//button[@id='submitButton']").click()
let r=await page.locator("//div[text()='Sign up successful!']")
// page.waitForSelector("//div[text()='Sign up successful!']")
expect(r).toBeVisible();



})