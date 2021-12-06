const playwright = require('playwright');

(async () => {
    const browser = await playwright["chromium"].launch({ 
        headless: false,
        slowMo: 1000
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({
        width: 1440,
        height: 900
    });
    await page.goto("https://executeautomation.com/demosite/Login.html");
    await page.type('[name=UserName]', 'executeautomation');
    await page.type('[name=Password]', 'admin');    
    await page.keyboard.press('Enter', {delay:2000});
    await page.waitForSelector("input[id=Initial]"); // this is not useful bec there is no visual feedback

    await page.hover("[id='Automation Tools']");
    await browser.close();
})().catch(e => console.log(e));