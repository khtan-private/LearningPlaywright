const playwright = require('playwright');

(async () => {
    const browser = await playwright["chromium"].launch({ 
        headless: false,
        devtools: true
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.hotstar.com"); // https://www.hotstar.com/in will show longer wait
    var waitPeriod = 1;
    await page.waitForResponse(response => {
        console.log("Wait ..." + waitPeriod);
        waitPeriod++;
        return response.request().resourceType() == "xhr"
    })
    await browser.close();
})();