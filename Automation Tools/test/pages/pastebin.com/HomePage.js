const EC = require('wdio-wait-for');
const Page = require('../Page');

class HomePage extends Page {
  get pasteCode() { return $('#postform-text') }
  get syntaxList() { return $('#select2-postform-format-container') }
  get bash() { return $(`//li[text()='Bash']`) }
  get expirationList() { return $('#select2-postform-expiration-container') }
  get min10() { return $(`//li[text()='10 Minutes']`) }
  get pasteName() { return $('#postform-name') }
  get createButton() { return $(`//button[@class='btn -big']`) }

  async open() {
    await super.open('https://pastebin.com');
    await this.hideBottomBanner();
  }

  async hideBottomBanner() {
    const hidden = $(`//*[@style='bottom: 21px;']`);
    const visible = $(`//*[@style='bottom: 105px;']`);
    const hideButton = $('#hideSlideBanner');

    if (await hidden.isExisting()) {
      await visible.waitForExist();
      await this.waitAndClick(hideButton);
    }
  }
  
  async createPaste(code, name, syntax) {
    await this.pasteCode.setValue(code);
    
    if (syntax) {
      await this.waitAndClick(this.syntaxList);
      await this.waitAndClick(this.bash);
    }

    await this.waitAndClick(this.expirationList);
    await this.waitAndClick(this.min10);
    await this.pasteName.setValue(name);
    await this.waitAndClick(this.createButton);
    await browser.waitUntil(EC.titleContains(name));
  }
}

module.exports = HomePage;
