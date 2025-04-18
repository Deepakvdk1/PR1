class leadscreatepage {
    constructor(page) {
        this.page=page
        this.clead=page.locator("//img[@alt='Create Lead...']")
        this.firstn=page.locator("//input[@name='firstname']")
        this.lastn=page.locator("//input[@name='lastname']")
        this.compn=page.locator("//input[@name='company']")
        this.ttl=page.locator("//input[@name='designation']")
        this.rev=page.locator("//input[@name='annualrevenue']")
        this.emp=page.locator("//input[@name='noofemployees']")
        this.email2=page.locator("//input[@name='secondaryemail']")
        this.phn=page.locator("//input[@name='phone']")
        this.mbl=page.locator("//input[@name='mobile']")
        this.eml=page.locator("//input[@name='email']")
        this.web=page.locator("//input[@name='website']")
        this.asn=page.locator("//input[@value='T']")
        this.cty=page.locator("//input[@name='city']")
        this.stte=page.locator("//input[@name='state']")
        this.cntry=page.locator("//input[@name='country']")
        this.ratin=page.locator("//select[@name='rating']")
        this.indus=page.locator("//select[@name='industry']")
        this.leadsour=page.locator("//select[@name='leadsource']")
        this.leadstat=page.locator("//select[@name='leadstatus']")
        this.salute=page.locator("//select[@name='salutationtype']")
        this.asntype=page.locator("//select[@name='assigned_group_id']")
        this.sav=page.locator("//input[@class='crmbutton small save']")
    }
    async createlead(){
        await this.clead.click()
    }

    async firstname(fn){
        await this.firstn.fill(fn)
    }
    async lastname(ln){
        await this.lastn.fill(ln)
    }
    async company(c){
        await this.compn.fill(c)
    }
    async title(tt){
        await this.ttl.fill(tt)
    }
    async revenue(r){
        await this.rev.fill(r)
    }
    async Nemployee(e){
        await this.emp.fill(e)
    }
    async secondemail(em2){
        await this.email2.fill(em2)
    }
    async phone(pn){
        await this.phn.fill(pn)
    }
    // async fax(f){
    //     await this.fx.fill(f)
    // }
    async email(em){
        await this.eml.fill(em)
    }
    async website(w){
        await this.web.fill(w)
    }
    async city(c){
        await this.cty.fill(c)
    }
    async state(s){
        await this.stte.fill(s)
    }
    async country(c){
        await this.cntry.fill(c)
    }
    async save(){
        await this.sav.click()
    }
    async assign(){
        await this.asn.click()
    }
    async salutation(sa){
        await this.salute.selectOption(sa)
    }
    async rating(ra){
        await this.ratin.selectOption(ra)
    }
    async industry(ind){
        await this.indus.selectOption(ind)
    }
    async leadsource(ls){
        await this.leadsour.selectOption(ls)
    }
    async leadstatus(lst){
        await this.leadstat.selectOption(lst)
    }
    async assigntype(at){
        await this.asntype.selectOption(at)
    }
}
export default leadscreatepage
