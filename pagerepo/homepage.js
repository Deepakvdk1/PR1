class homepage{
    constructor(page){
        this.page=page
        this.calender= page.locator("//td/a[text()='Calendar']")
        this.organisation=page.locator("//td/a[text()='Organizations']")
        this.products=page.locator("//td/a[text()='Products']")
        this.leads=page.locator("//td/a[text()='Leads']")
        this.profile=page.locator("//img[@src='themes/softed/images/user.PNG']")
        this.logoutbtn=page.locator("//td/a[text()='Sign Out']")
    }
  async  logout(){
    await this.profile.hover()
    await this.logoutbtn.click()
    }
    async lead(){
        await this.leads.click()}
    async cal(){await this.calender.click()}
    async org(){await this.org.click()}
    async pd(){await this.products.click()}
}
export default homepage