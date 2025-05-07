import test from "@playwright/test";


test('Basic locators',async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
    page.locator("#Login").click
    const title=await page.title()
    //const title1=page.getByTitle
    console.log(title)
    //console.log(" the tiltle is " +title1)

})