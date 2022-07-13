const {By, until} = require('selenium-webdriver');
const Page = require('./Page');

class HomePage extends Page {
  constructor() {
    super();

    this.pasteCode = By.id('postform-text');
    this.pasteSyntax = By.id('select2-postform-format-container');
    this.bash = By.xpath(`//li[text()='Bash']`);
    this.expiration = By.id('select2-postform-expiration-container');
    this.min10 = By.xpath(`//li[text()='10 Minutes']`);
    this.pasteName = By.id('postform-name');
    this.createButton = By.className('btn -big');
  }

  async open() {
    await super.open('https://pastebin.com');
    await this.hideBottomBanner();
  }

  async hideBottomBanner() {
    await this.driver.wait(until.elementLocated(By.xpath(`//*[@style='bottom: 105px;']`)));
    await this.driver.findElement(By.id('hideSlideBanner')).click();
  }
  
  async createPaste(code, name, syntax) {
    await this.driver.findElement(this.pasteCode).sendKeys(code);
    
    if (syntax) {
      await this.driver.findElement(this.pasteSyntax).click();
      await this.driver.findElement(this.bash).click();
    }

    await this.driver.findElement(this.expiration).click();
    await this.driver.findElement(this.min10).click();
    await this.driver.findElement(this.pasteName).sendKeys(name);
    await this.driver.findElement(this.createButton).click();
    await this.driver.wait(until.titleContains(name), 5000);
  }
}

module.exports = HomePage;
