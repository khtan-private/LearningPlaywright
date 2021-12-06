import {chromium, firefox, webkit} from 'playwright';

for (const browserType of [chromium, firefox, webkit]){
    console.log('Running ', browserType.name());
    const browser = await browserType.launch();
    const page = await browser.newPage();
    const url = 'https://playwright.dev';
    await page.goto(url);
    await page.screenshot({path: `image-${browserType.name()}.png`});
    await browser.close();
}
