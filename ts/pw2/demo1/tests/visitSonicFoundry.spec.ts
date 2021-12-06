import { test, expect } from '@playwright/test';

function delay(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time) 
    });
}
async function visitSonicFoundry(timedelay, page){
    await page.goto('https://sonicfoundry.com');
    expect(await page.title()).toContain('Sonic Foundry');

    // expect(await page.getAttribute('text=LEARN MORE', 'href')).toBe('/events');
    expect(await page.isVisible('text=LEARN MORE')).toBeTruthy();
    await delay(timedelay);
    await page.click('text=LEARN MORE');
    expect(await page.waitForSelector('text=GET A DEMO')).toBeTruthy();
}
test('visit 0', async ({page}) => {
    await visitSonicFoundry(0, page);
});
test('visit 4000', async ({page}) => {
    await visitSonicFoundry(4000, page);
});
test('visit 6000', async ({page}) => {
    await visitSonicFoundry(6000, page);
});
test('visit 10000', async ({page}) => {
    await visitSonicFoundry(10000, page);
});
