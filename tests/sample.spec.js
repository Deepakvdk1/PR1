import { test } from "@playwright/test";
import login from "../pagerepo/login";
test('login',async({page})=>{
    await page.goto("http://49.249.28.218:8888/")
 let l=new login(page)
 await l.log()
})