import test from "@playwright/test";
import fs from 'fs';
import {parse} from 'csv-parse/sync';

test('Read the details from csv file',async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main");

// read the file

const fileContent=fs.readFileSync("data/login.csv");

//parse csv

const records=parse(fileContent,{
    columns:true,
    skip_empty_lines:true
})

console.log(records);

for(const user of records){

    console.log(`the records:${user.firstname}${user.Lastname}`)

    //login crm page

    await page.fill('#username',user.username);
    await page.fill('#password',user.password);
    await page.click('.decorativeSubmit');

    //click crm link

    await page.click('text=CRM/SFA');

    //click leads

    await page.click('text=Leads');
    await page.click('text=Create Lead');

    //etering details

    await page.fill('#createLeadForm_companyName',user.CompanyName);
    await page.fill('#createLeadForm_firstName',user.Firstname);
    await page.fill('#createLeadForm_lastName',user.Lastname);

    // selcet direct mail 

    await page.selectOption('#createLeadForm_dataSourceId',{label:'Direct Mail'});

    //marketing campaing

    await page.selectOption('#createLeadForm_marketingCampaignId',{value:'DEMO_MKTG_CAMP'});

    //to print all the values in marketing campaign

    const marketingOptions= await page.$$('#createLeadForm_marketingCampaignId option');

    console.log(`marketing options: (${marketingOptions.length})`);

    for(const options of marketingOptions ){

       console.log(await options.textContent());

    }

    //select industry by using index

    await page.selectOption('#createLeadForm_industryEnumId',{index:5});

    // inr from preferred currency DD

    await page.selectOption('#createLeadForm_currencyUomId',{value:'INR'});

    //select india
    await page.selectOption('#createLeadForm_generalCountryGeoId',{label:'India'});

    //select state

    await page.selectOption('#createLeadForm_generalStateProvinceGeoId',{index:2});

    const countOfState= await page.$$('#createLeadForm_generalStateProvinceGeoId option');

    console.log(`the state count is: ${countOfState.length}`);

    for(const states of countOfState){

        console.log(await states.textContent())

    }

    //click create lead:
    await page.waitForTimeout(3000);

    await page.click('input[value="Create Lead"]');

    console.log("the lead is created successfully")


}


})