const GeneratorPage = require('./GeneratorPage');

class EmailPage extends GeneratorPage {
  get inbox() { return $(`//iframe[@id='ifinbox' and @state='full']`) }
  get refreshButton() { return $(`#refresh`) }
  get cost() { return $(`//h3[contains(text(), 'USD')]`) }

  async checkInbox() {
    await super.checkInbox();

    while(!await this.inbox.isDisplayed()) {
      await super.waitAndClick(this.refreshButton);
    }
  }

  async getCost() {
    await browser.switchToFrame(2);
    const cost = parseFloat((await super.getText(this.cost)).replace(/^\D+|,/g, ''));
    await browser.switchWindow('cloud.google.com');
    return cost;
  }
}

module.exports = EmailPage;
