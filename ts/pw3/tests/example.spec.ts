import { test, expect } from '@playwright/test';

test('basic test 1 nested classes', async({page}) => {
    await page.goto('https://playwright.dev');
    const title = page.locator('.navbar__inner .navbar__title');
    // console.log(`title: ${await title.textContent()}`)
    await expect(title).toHaveText('Playwright')
})

test('basic test 2 single class', async({page}) => {
    await page.goto('https://playwright.dev');
    const title = page.locator('.navbar__title');
    // console.log(`title: ${await title.textContent()}`)
    await expect(title).toHaveText('Playwright')
})

test('basic test 1a nested classes', async({page}) => {
    await page.goto('https://playwright.dev');
    const title = page.locator('.navbar__inner .navbar__title');
    // console.log(`title: ${await title.textContent()}`)
    await expect(title).toHaveText('Playwright')
})

test('basic test 2a single class', async({page}) => {
    await page.goto('https://playwright.dev');
    const title = page.locator('.navbar__title');
    // console.log(`title: ${await title.textContent()}`)
    await expect(title).toHaveText('Playwright')
})