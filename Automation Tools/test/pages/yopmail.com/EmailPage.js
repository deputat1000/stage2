const GeneratorPage = require('./GeneratorPage');

class EmailPage extends GeneratorPage {
  get message() { return $(`//button[@class='lm']`) }
  get emptyInboxMark() { return $(`//div[text()='This inbox is empty']`) }
  get refreshBtn() { return $(`#refresh`) }
  get estCost() { return $(`//h3[contains(text(), 'USD')]`) }

  async checkInbox() {
    await super.checkInbox();
    await super.refresh(this.message, this.emptyInboxMark, this.refreshBtn);
  }

  async getEstCost() {
    await browser.switchToFrame(2);
    const cost = parseFloat((await super.getText(this.estCost)).replace(/\D+/, '').replace(/,/, ''));
    await browser.switchWindow('cloud.google.com');
    return cost;
  }
}

module.exports = EmailPage;
