import { test } from "@playwright/test";
import login from "../pagerepo/login";
import homepage from "../pagerepo/homepage";
import leadspage from "../pagerepo/leadspage";
test("edit",async({page})=>{
await page.goto("http://49.249.28.218:8888/") 
const l=new login(page)
await l.log()

const h=new homepage(page)
await h.leads.click()
const le=new leadspage(page)
await le.selectEditOpt('mark')
const e=new editpage(page)
await e.editSave('mark')
await expect(le.verifn).toContainText('mark')

})