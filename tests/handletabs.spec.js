import {expect, test} from "@playwright/test"
test("handle",async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage()
await page.goto("https://www.w3schools.com/js/")
await page.locator("//a[text()='Try it Yourself »']").click()
let product= await page.locator("//button[@type='button']")
let [page2]=await Promise.all([
    context.waitForEvent("page"),
    product.click()
]);
  // await page2.waitForLoadState()
   await expect(page2).not.toHaveURL(page.url())
})