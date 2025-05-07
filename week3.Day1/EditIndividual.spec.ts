import test, { expect } from "@playwright/test";

test('test individual',async({page})=>{
    
    await page.goto("https://login.salesforce.com")

    await page.locator("//input[@id='username']").fill("vidyar@testleaf.com")
    
    await page.locator("//input[@id='password']").fill("Sales@123")
    
    await page.locator("//input[@id='Login']").click()
    
    await page.waitForTimeout(5000)
    // toggle click
    await page.locator("//div[@class='slds-icon-waffle']").click()
    // view all click
    await page.locator("//button[text()='View All']").click()
    await page.waitForTimeout(5000)

    // click individual link
await page.locator("//a[@data-label='Individuals']").click()
// edit the individual
await page.locator("(//td[@role='gridcell'])[6]").click()

await page.locator("//div[@title='Edit']").click()
//select dropdown Mr.
await page.locator("(//a[@role='combobox'])[1]").click();
await page.locator("//a[@title='Mr.']").click()

// enter firstname
await page.locator("//input[@placeholder='First Name']").fill("Ramya")

//click save

await page.locator("(//span[text()='Save'])[2]").click()

await expect(page.locator("//a[contains(@title,'ramya venkat')]")).toBeVisible

})