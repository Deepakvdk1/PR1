import { expect, test } from "@playwright/test";
import { log } from "console";
test("handletabs",async({browser})=>{
    let context =await browser.newContext()
     let page=await context.newPage()
    await page.goto("https://www.amazon.in/")
    let u1=page.url()
    await page.locator("//img[@src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg']").click()
    let product =await page.locator("//span[text()='boAt New Launch Rockerz 650 Pro, Touch/Swipe Controls, Dolby Audio, 80Hrs Battery, 2Mics ENx, Fast Charge, App Support, Dual Pair, Bluetooth Headphones, Wireless Headphone with Mic (Iris Black)']")
    let[page2]=await Promise.all([
        context.waitForEvent("page"),
        product.click()
    ])
expect(page2)
    let u2=await page2.url()
    console.log(u1)
    console.log(u2)
    console.log(await page.title());
    console.log(await page2.title());
    
})