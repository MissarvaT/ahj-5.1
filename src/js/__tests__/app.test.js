import puppetteer from 'puppeteer';

jest.setTimeout(30000);

describe('popover work', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('popover work', () => {
    test('should toggle popover in right position', async () => {
      await page.goto(baseUrl);
      const form = await page.$('div[class=button-control]');
      const submit = await form.$('button[class=btn]');
      submit.click();
      await page.waitForSelector('[class=popover]');
    });
  });
});

