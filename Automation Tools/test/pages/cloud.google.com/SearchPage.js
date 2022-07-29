const EC = require('wdio-wait-for');
const HomePage = require('./HomePage');

class SearchPage extends HomePage {
  get calculator() { return $(`//a[@data-ctorig='https://cloud.google.com/products/calculator']`) }
  

  async handleSearchResult() {
    const incorrectResult = $('//aside');
    const test = await browser.waitUntil(EC.or(EC.elementToBeClickable(this.calculator), EC.visibilityOf(incorrectResult)));
    
    while (await incorrectResult.isDisplayed()) {
      await browser.reloadSession();
      await this.open();
      await this.search();
      await test;
    }
  }

  async select() {
    await this.handleSearchResult();
    await this.waitAndClick(this.calculator);
  }
}

module.exports = SearchPage;
