const GeneratorPage = require('./GeneratorPage');

class EmailPage extends GeneratorPage {
  get inbox() { return $(`//iframe[@id='ifinbox' and @state='full']`) }
  get message() { return $(`//button[@class='lm']`) }
  get cost() { return $(`//h3[contains(text(), 'USD')]`) }

  async checkInbox() {
    await super.checkInbox();

    while(!await this.inbox.isDisplayed()) {
      await browser.refresh();
    }
  }

  async getCost() {
    await browser.switchToFrame(0);
    await this.waitAndClick(this.message);
    await browser.switchToParentFrame();
    await browser.switchToFrame(2);
    const cost = parseFloat((await this.getText(this.cost)).replace(/^\D+|,/g, ''));
    await browser.switchWindow('cloud.google.com');
    return cost;
  }
}

module.exports = EmailPage;
