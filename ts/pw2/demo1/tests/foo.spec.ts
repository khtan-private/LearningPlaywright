import { test, expect } from '@playwright/test';

test.beforeEach(async ({}, testInfo) => {
    console.log('>>> ', testInfo.title, ":", testInfo.repeatEachIndex);
});
test.afterEach(async ({}, testInfo) => {
    console.log('   <<< ', testInfo.title, ":", testInfo.repeatEachIndex);
});
test('basic test', async({page}, testInfo) => {
    await page.goto('https://playwright.dev');
    const name = await page.innerText('.navbar__title');
    expect(name).toBe('Playwright');
});
