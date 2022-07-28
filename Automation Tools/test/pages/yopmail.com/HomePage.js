const Page = require('../Page');

class HomePage extends Page {
  get emailGeneratorButton() { return $(`//a[@href='email-generator']`) }

  async open() {
    await browser.newWindow('https://yopmail.com');
  }
  
  async generateEmail() {
    await this.emailGeneratorButton.click();
  }
}

module.exports = HomePage;
