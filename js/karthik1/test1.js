const playwright = require('playwright');

(async () => {
    const browser = await playwright["chromium"].launch({ headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://executeautomation.com/demosite/Login.html");
    await browser.close();
})();