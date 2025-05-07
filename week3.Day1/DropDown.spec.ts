import test from "@playwright/test";

test('DropDown selection',async({page})=>{

    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("#Dropdown-1",{label:'Account activation'})
    await page.waitForTimeout(3000)

    await page.selectOption("#Dropdown-2",{label:'Kendo UI'})
    await page.waitForTimeout(2000)
    
})