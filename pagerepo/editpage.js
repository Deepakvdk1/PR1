
class editpage{
    constructor(page){
        this.page=page
        this.sav=page.locator("//input[@class='crmButton small save']")
        this.nam=page.locator("//input[@name='firstname']")
        this.can=page.locator("(//input[@accesskey='X'])[2]")
    }
    async editSave(){
        await this.page.locator(this.nam).fill('mark')
        await this.sav.click()
    }
   

}