import { test, expect } from '@playwright/test';

function delay(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time) 
    });
}

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

test('old frame', async({page}) => {
    await page.goto('https://letcode.in/frame');
    const frame =  page.frame({name: "firstFr"});
    if(frame != null){
        await frame.fill("input[name='fname']", "kwee");
        await frame.fill("input[name='lname']", "tan");
        const cframes = frame.childFrames();
        console.log(`No of inner frames: ${cframes.length}`);
        if(cframes != null){
            await cframes[0].fill("input[name='email']", "tan.k.h@juno.com");
        } else {
            console.log("No child frames");
        }
        await delay(10000);
    } else throw new Error("No such frame: firstFr")
})

test('new frame', async({page}) => {
    await page.goto('https://letcode.in/frame');
    const frame = page.frameLocator("#firstFr");
    // const frame =  page.frame({name: "firstFr"});
    if(frame != null){
        await frame.locator("input[name='fname']").type("kwee");
        const lname = await frame.locator("input[name='lname']");
        lname.type("tan");
        const txt = await frame.locator("p.title.has-text-info").textContent();
        console.log(txt)

        // const cframe = frame.frameLocator("iframe.has-background-white");
        const cframe = frame.frameLocator(".").nth(0);
        if(cframe != null){
            await cframe.locator("input[name='email']").type("tan.k.h@juno.com");
        } else {
            console.log("No child frame");
        }

        await delay(10000);
    } else throw new Error("No such frame: firstFr")
})

test('jewel1', async({page}) => {
    await page.goto('https://www.stuller.com/demoSite/MensJewelry');
    await delay(5000);    
    // Click img[alt="Tungsten Grooved Band"]
    await page.frame({
        // url: 'https://demo-frame-categoryembed-catid140.jewelershowcase.com/products/tar52198/?groupId=210516&categoryId=140&recommendationSource=CategoryBrowse'
        url: 'https://demo-frame-categoryembed-catid140.jewelershowcase.com/browse/jewelry/men-s-jewelry/'        
    }).click('img[alt="Tungsten Grooved Band"]');
    await delay(10000);
})

test('jewel2', async({page}) => { // works
    await page.goto('https://www.stuller.com/demoSite/MensJewelry');
    await delay(5000);    
    // Press ScrollLock
    await page.frame({
    url: 'https://demo-frame-categoryembed-catid140.jewelershowcase.com/browse/jewelry/men-s-jewelry/'
    }).click(':nth-match(a:has-text("Tungsten Grooved Band"), 2)', 'ScrollLock');
    await delay(10000);
})
