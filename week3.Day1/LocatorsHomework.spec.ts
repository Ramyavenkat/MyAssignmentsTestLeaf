import test, { expect } from "@playwright/test";

test('Salesforce Assignments',async({page})=>{

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

// click on sales section
await page.locator("//div[@data-name='Sales']").click()
await page.waitForTimeout(5000)
// click on leads tab
await page.locator("(//span[text()='Leads'])[1]").click()
// click on new button

await page.locator("//div[@title='New']").click()
await page.locator("//label[text()='Salutation']").waitFor({ state: "visible", timeout: 10000 });
await page.locator("(//label[text()='Salutation']/following-sibling::div)[1]").click();
//await page.waitForTimeout(5000)
await page.locator("(//span[text()='Mrs.'])[1]").click()
//await page.selectOption()

// enter lastname

await page.locator("//input[@name='lastName']").fill("Masilamani")
// enter company name
await page.locator("//input[@name='Company']").fill("abc private ltd")

// click save

await page.locator("(//button[text()='Save'])[2]").click()
//verification of the name

await expect(page.locator("//div[contains(@class,'entityNameTitle')]/following::slot[1]")).toBeVisible()
await expect(page.locator("//div[contains(@class,'entityNameTitle')]/following::slot[1]")).toContainText("Masilamani")
})