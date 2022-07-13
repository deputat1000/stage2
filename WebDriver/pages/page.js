const {Builder} = require('selenium-webdriver');
const {Options, ServiceBuilder} = require('selenium-webdriver/chrome');

class Page {
  constructor() {
    this.driver = Page.initBrowser();
  }

  static initBrowser() {
    const options = new Options().addArguments('--log-level=3');
    const service = new ServiceBuilder('bin/chromedriver');
    return new Builder().forBrowser('chrome').setChromeOptions(options).setChromeService(service).build();
  }

  async open(url) {
    await this.driver.get(url);
  }

  async close() {
    await this.driver.quit();
  }
}

module.exports = Page;
