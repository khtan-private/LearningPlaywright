const playwright = require('playwright');

(async () => {
    const browser = await playwright["chromium"].launch({ 
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({
        width: 1440,
        height: 900
    });
    await page.goto("https://demoqa.com/nestedframes");
    let x = await page.waitForSelector("#frame1");
    parent = await x.contentFrame(); // contentFrame appears to work but _childFrames cannot be accessed
    
    let children = await parent.childFrames();
    let child = children[0];
    let body = await child.waitForSelector("p");
    let visible =  await body.isVisible();
    // let text = await body.text;
    let text = await body.textContent();
    console.log(visible);
    console.log(text);
    await browser.close();
})().catch(e => console.log(e));