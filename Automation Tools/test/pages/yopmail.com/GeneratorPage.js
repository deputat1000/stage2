const HomePage = require('./HomePage');

class GeneratorPage extends HomePage {
  get copyEmailBtn() { return $('#cprnd') }
  get checkInboxBtn() { return $(`//button[@onclick='egengo();']`) }

  async copyEmail() {
    await this.copyEmailBtn.click();
    await browser.switchWindow('cloud.google.com');
  }

  async checkInbox() {
    await this.checkInboxBtn.click();
  }
}

module.exports = GeneratorPage;
