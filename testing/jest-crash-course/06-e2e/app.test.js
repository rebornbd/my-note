const puppeteer = require('puppeteer');


it("e2e testing", async (done) => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://jsonplaceholder.typicode.com/');
  // await page.screenshot({ path: 'example.png' });

  await browser.close();
  done();
}, 20000);
