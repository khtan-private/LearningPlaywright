import { chromium, firefox, webkit } from 'playwright';
import { expect } from 'playwright/test';

// for (const browserType of [chromium, firefox, webkit]){
for (const browserType of [chromium]){
    console.log('Running ', browserType.name());
    // const browser = await browserType.launch({headless: false, slowMo: 5000});
    const browser = await browserType.launch({headless: false});
    for (let i =0; i < 1; i++){
        const context = await browser.newContext();
        const page = await context.newPage();
        const url = 'https://playwright.dev';
        await page.goto(url);
        const pagetitle = await page.title();
        expect(await page.title()).toContain('Playwright');
        // console.log(`page.title == ${pagetitle}`);
        console.log("page.title == ", pagetitle);
        // expect(await page.getAttribute('text=GET STARTED', 'href')).toBe('/docs/intro');
        console.log("href of GET STARTED == ${page.getAttribute('text=GET STARTED','href')}");
        // expect(await page.isVisible('text=Learn more')).toBeTruthy();
        console.log("isVisible = ${page.isVisible('text=Learn more')}");
        await page.click('text=Get Started');
        // expect(await page.waitForSelector('text=System requirements')).toBeTruthy();
        await page.waitForSelector('text=System requirements');
        await context.close();
    }
    await browser.close();
}
