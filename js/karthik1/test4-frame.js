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
    await page.goto("https://demoqa.com/frames");
    // const iframeText = 'This is a sample page';
    let x = await page.waitForSelector("#frame1");
    let frame_one = await x.contentFrame(); // contentFrame is not a function
    
    let heading = await frame_one.waitForSelector("#sampleHeading");
    let visible =  await heading.isVisible();
    // let text = await heading.iframeText;
    let text = await heading.textContent();
    console.log(visible);
    console.log(text);
    await browser.close();
})().catch(e => console.log(e));