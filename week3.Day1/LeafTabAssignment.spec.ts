import test from "@playwright/test";

test('LeafTab Assignments',async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")

// username
await page.locator("//input[@id='username']").fill("DemoSalesManager ")

//password

await page.locator("//input[@id='password']").fill("crmsfa")

// click login

await page.locator("//input[@type='submit']").click()

//click crm link

await page.locator("//a[contains(text(),'CRM/SFA')]").click()
//click leads link
await page.locator("//a[text()='Leads']").click()
//click create lead 

await page.locator("//a[text()='Create Lead']").click()

//enter company name

await page.locator("//input[@id='createLeadForm_companyName']").fill("ivl tech")

//enter first name
 await page.locator("//input[@id='createLeadForm_firstName']").fill("ramya")
 //enter last name
 await page.locator("//input[@id='createLeadForm_lastName']").fill("masilamani")

 // click create lead 

 await page.locator("//input[@value='Create Lead']").click()

 // click edit button
 await page.locator("//a[text()='Edit']").click()
// update company name
await page.locator("//input[@id='updateLeadForm_companyName']").waitFor({ state: "visible", timeout: 10000 });
await page.locator("//input[@id='updateLeadForm_companyName']").clear()
await page.locator("//input[@id='updateLeadForm_companyName']").fill("abc techno  tech")

// click update name
await page.locator("//input[@value='Update']").click()
})