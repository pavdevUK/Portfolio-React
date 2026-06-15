const puppeteer = require('puppeteer')


async function getCV() {
    const path = 'src/components/I-CV/cv.pdf'
    console.log('1/4 Launching cv scraper');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
        width: 1280,
        height: 1810,
        deviceScaleFactor: 2
    });
    await page.goto('http://localhost:3000/cv', {
        waitUntil: 'networkidle0'
    });
    console.log('2/4 Converting screenshot to pdf');
    await page.emulateMediaType('print');
    await page.evaluateHandle('document.fonts.ready');
    console.log('3/4 Saving to', path);
    await page.pdf({
        path: path,
        format: 'A4',
        printBackground: true,
        scale: 1.08,
        preferCSSPageSize: true,
        margin: {
            top: '8mm',
            right: '8mm',
            bottom: '8mm',
            left: '8mm'
        }
    });
    await browser.close();
    console.log('4/4 CV downloaded.');
}
getCV().catch(console.error);