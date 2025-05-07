import test, { expect } from "@playwright/test";

test('create Individuals in salesforce',async({page})=>{
    
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

// click on new tab

await page.locator("(//div[@title='New'])[1]").click()

// enter the last name
await page.locator("//input[@placeholder='Last Name']").fill("venkat")

// click save

await page.locator("(//span[text()='Save'])[2]").click()

// verification
//await expect(page.locator("(//div[contains(@class,'slds-page-header__title')]/span)[2]")).toBeVisible()

await expect(page.locator("//div[contains(@class,'slds-page-header__title ')]//span[contains(text(),'venkat')]")).toBeVisible()






})