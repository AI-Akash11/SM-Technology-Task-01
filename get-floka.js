const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Set a realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1440, height: 900 });

    console.log('Navigating to Floka...');
    await page.goto('https://floka.casethemes.net/home-1-onepage/', { waitUntil: 'networkidle2', timeout: 60000 });
    
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'floka-screenshot.png', fullPage: true });

    // Also get the outerHTML of the Approach section or the whole body
    console.log('Extracting DOM...');
    const html = await page.content();
    fs.writeFileSync('floka-dom.html', html);

    await browser.close();
    console.log('Done.');
  } catch (err) {
    console.error('Error:', err);
  }
})();
