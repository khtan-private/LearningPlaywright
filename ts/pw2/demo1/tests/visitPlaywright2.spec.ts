import { test, expect } from '@playwright/test';

function delay(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time) 
    });
}
async function visitPlaywright(timedelay, page){
    await page.goto('https://playwright.dev');
    expect(await page.title()).toContain('Playwright');
    expect(await page.getAttribute('text=GET STARTED', 'href')).toBe('/docs/intro');
    expect(await page.isVisible('text=Learn more')).toBeTruthy();

    await page.click('text=Get Started');
    expect(await page.waitForSelector('text=System requirements')).toBeTruthy();
    await delay(timedelay);
}
test.describe('visitPlayright2', () => {
    test('visit2 0', async ({page}) => {
        await visitPlaywright(0, page);
    });
    test('visit2 4000', async ({page}) => {
        await visitPlaywright(4000, page);
    });
    test('visit2 6000', async ({page}) => {
        await visitPlaywright(6000, page);
    });
    test('visit2 10000', async ({page}) => {
        await visitPlaywright(10000, page);
    });
});
