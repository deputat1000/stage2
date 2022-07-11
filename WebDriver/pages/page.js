const {Builder} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/chrome');

class Page {
  constructor() {
    this.driver = Page.initBrowser();
  }

  static initBrowser() {
    const options = new Options().setChromeBinaryPath('/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta');
    return new Builder().forBrowser('chrome').setChromeOptions(options).build();
  }

  async open(url) {
    await this.driver.get(url);
  }

  async close() {
    await this.driver.quit();
  }
}

module.exports = Page;
