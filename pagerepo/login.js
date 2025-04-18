class login{
    constructor(page){
        this.page=page
        this.lgtbx= page.locator("//input[@name='user_name']") 
        this.pwtbx=page.locator("//input[@name='user_password']") 
        this.sbtn=page.locator("//input[@type='submit']")
    }
async log(){
    await this.lgtbx.fill('admin')
    await this.pwtbx.fill('admin')
    await this.sbtn.click()
}

}
export default login