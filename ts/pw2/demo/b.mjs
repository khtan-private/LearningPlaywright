import {chromium, firefox, webkit} from 'playwright';


for (const browserType of [chromium, firefox, webkit]){
    console.log('Running ', browserType.name());
    const browser = await browserType.launch();
    for (let i =0; i < 10; i++){
        const context = await browser.newContext();
        const page = await context.newPage();
        const url = 'https://playwright.dev';
        await page.goto(url);
        await context.close();
    }
    await browser.close();
}

