const HomePage = require('./HomePage');

class GeneratorPage extends HomePage {
  get copyEmailButton() { return $('#cprnd') }
  get checkInboxButton() { return $(`//button[@onclick='egengo();']`) }

  async copyEmail() {
    await this.copyEmailButton.click();
    await browser.switchWindow('cloud.google.com');
  }

  async checkInbox() {
    await this.checkInboxButton.click();
  }
}

module.exports = GeneratorPage;
