import { strictEqual } from "node:assert"
import homepage from "./homepage"

class leadspage {
    constructor(page) {
        this.page=page
        this.searcbr=page.locator("//input[@name='search_text']")
        
        this.searchty=page.locator("(//select[@id='bas_searchfield'])[1]")
        this.chk=page.locator("//input[@name='selectall']")
        this.del=page.locator("(//input[@class='crmbutton small delete'])[1]")
        this.edi=page.locator("//td/a[text()='edit']")
        this.srhbtn=page.locator("(//input[@value=' Search Now ' ])[1]")
        this.verifn=page.locator("//td/span[@vtfieldname='firstname']")
        
    }
    
async delete(fn,rn,page){
   await page.waitForSelector("//select[@id='bas_searchfield']")
    // let y=this.searchty.selectOption(fn)
    // await console.log(y);
     console.log(fn);
     console.log(rn);
     await this.page.waitForTimeout(5000)
    await this.searchty.selectOption(fn)
    await this.searcbr.fill(rn)
    await this.srhbtn.click()
    await this.chk.click()
    await this.del.dblclick()
    await this.page.waitForTimeout(5000)
    await this.page.on("dialog", async (dialog) => {
        // expect(dialog.type()).toContain("alert");
        // expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
        
      })
    //   await page.waitForSelector("#confirmBtn");
    //   await page.locator("#confirmBtn").click();
      let h=new homepage(page)
      await h.logout()
    
    
}
    async selectEditOpt(fn,page){
        await page.waitForSelector(this.searchty)
        await this.searchty.selectOption(fn)
        await this.searcbr.fill('mike')
        await this.edi.click()
    }
    
}
export default leadspage