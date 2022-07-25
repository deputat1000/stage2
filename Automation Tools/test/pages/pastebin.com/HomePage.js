const EC = require('wdio-wait-for');
const Page = require('../Page');

class HomePage extends Page {
  get pasteCode() { return $('#postform-text') }
  get syntaxList() { return $('#select2-postform-format-container') }
  get bash() { return $(`//li[text()='Bash']`) }
  get expList() { return $('#select2-postform-expiration-container') }
  get min10() { return $(`//li[text()='10 Minutes']`) }
  get pasteName() { return $('#postform-name') }
  get createBtn() { return $(`//button[@class='btn -big']`) }

  async open() {
    await super.open('https://pastebin.com');
    await this.hideBottomBanner();
  }

  async hideBottomBanner() {
    const hidden = $(`//*[@style='bottom: 21px;']`);
    const visible = $(`//*[@style='bottom: 105px;']`);
    const hideBtn = $('#hideSlideBanner');
    if (hidden.isExisting()) {
      await browser.waitUntil(EC.presenceOf(visible));
      await hideBtn.click();
    }
  }
  
  async createPaste(code, name, syntax) {
    await this.pasteCode.setValue(code);
    
    if (syntax) {
      await this.syntaxList.click();
      await this.bash.click();
    }

    await this.expList.click();
    await this.min10.click();
    await this.pasteName.setValue(name);
    await this.createBtn.click();
    await browser.waitUntil(EC.titleContains(name));
  }
}

module.exports = HomePage;
