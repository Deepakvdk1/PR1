import { test } from "@playwright/test";
import leadspage from "../pagerepo/leadspage";
import login from "../pagerepo/login";
import homepage from "../pagerepo/homepage";
import del from "../testdata/del.json"


test("deletelead",async({page})=>{
    await page.goto(del.url)
    let lo=new login(page)
    await lo.log()
    let  h= new homepage(page)
    await h.lead()
    let lp=new leadspage(page)
    await lp.delete(del.fstname,del.name,page)
    
    //  page.on("dialog", async (dialog) => {
    //          console.log(await dialog.message())
    //         await dialog.accept()      
    //       })

 })