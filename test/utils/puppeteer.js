import puppeteer from '../../lib/utils/puppeteer.js';
import wait from '../../lib/utils/wait.js';

describe('puppeteer', () => {
    it('puppeteer run', async () => {
        const browser = await puppeteer();
        const page = await browser.newPage();
        await page.goto('https://www.google.com', {
            waitUntil: 'domcontentloaded',
        });

        // eslint-disable-next-line no-undef
        const html = await page.evaluate(() => document.body.innerHTML);
        expect(html.length).toBeGreaterThan(0);

        expect((await browser.process()).exitCode).toBe(null);
        await wait(31 * 1000);
        expect((await browser.process()).exitCode).toBe(0);
    }, 40000);
});
