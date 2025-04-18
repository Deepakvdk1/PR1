import { expect, test } from "@playwright/test";
import login from "../pagerepo/login";
import homepage from "../pagerepo/homepage";
import leadscreatepage from "../pagerepo/leadscreatepage";
import leadspage from "../pagerepo/leadspage";
test("createlead",async({page})=>{
    await page.goto("http://49.249.28.218:8888/")
    let lo=new login(page)
    await lo.log()
    let  h= new homepage(page)
    await h.lead()
    let l=new leadscreatepage(page)
    await l.createlead()
    await l.salutation('Mr.')
    await l.firstname('mike')
    await l.lastname('tyson')
    await l.company('UFC.co')
    await l.title('manager')
    await l.revenue('200000')
    await l.Nemployee('120')
    await l.secondemail('mike@ufc.com')
    await l.phone('26060612')
    await l.email('tyson@champ.com')
    await l.website('www.mikedyke.com')
    await l.city('NorthMadras')
    await l.state('TN')
    await l.country('india')
    await l.assign()
    await l.assigntype('Marketing Group')
    await l.rating('Active')
    await l.industry('Manufacturing')
    await l.leadsource('Cold Call')
    await l.leadstatus('Contacted')
    await l.save()
    //await page.keyboard.down('Alt')
    await page.waitForSelector("//tr//span[text()='mike']")
    expect (page.locator("//tr//span[text()='mike']")).toContainText("mike")

    await h.logout()
 })
 
