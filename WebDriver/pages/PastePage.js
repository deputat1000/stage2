const {By, until} = require('selenium-webdriver');
const HomePage = require('./HomePage');

class PastePage extends HomePage {
  constructor() {
    super();
    
    this.syntax = By.className('btn -small h_800');
    this.code = By.className('textarea -raw js-paste-raw');
  }
  
  async getText(el) {
    let text = await this.driver.wait(until.elementLocated(el), 5000).getText();
    return text;
  }

  async getTitle() {
    return this.driver.getTitle();
  }

  async getPasteSyntax() {
    const syntaxText = await this.getText(this.syntax);
    return syntaxText;
  }
  
  async getPasteCode() {
    const codeText = await this.getText(this.code);
    return codeText;
  }
}

module.exports = PastePage;
