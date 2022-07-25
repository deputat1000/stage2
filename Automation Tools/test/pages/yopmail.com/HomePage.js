const Page = require('../Page');

class HomePage extends Page {
  get emailGenBtn() { return $(`//a[@href='email-generator']`) }

  async openEmailService() {
    await browser.newWindow('https://yopmail.com');
  }
  
  async generateEmail() {
    await this.emailGenBtn.click();
  }
}

module.exports = HomePage;
