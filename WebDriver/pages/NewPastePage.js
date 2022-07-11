const {By, until} = require('selenium-webdriver');
const HomePage = require('./HomePage');

class NewPastePage extends HomePage {
  constructor() {
    super();
    
    this.name = By.xpath('//h1');
    this.syntax = By.className('btn -small h_800');
    this.code = By.className('textarea -raw js-paste-raw');
  }
  
  async getText(el) {
    let text = await this.driver.wait(until.elementLocated(el), 5000).getText();
    return text;
  }

  async getPasteName() {
    const nameText = await this.getText(this.name);
    return nameText;
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

module.exports = NewPastePage;
