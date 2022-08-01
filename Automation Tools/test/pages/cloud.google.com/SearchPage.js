const EC = require('wdio-wait-for');
const HomePage = require('./HomePage');

class SearchPage extends HomePage {
  get calculator() { return $(`//a[@data-ctorig='https://cloud.google.com/products/calculator']`) }
  get incorrectResult() { return $('//aside') }

  async handleSearchResult() {
    await browser.waitUntil(EC.or(EC.elementToBeClickable(this.calculator), EC.visibilityOf(this.incorrectResult)));
    
    while (await this.incorrectResult.isDisplayed()) {
      await browser.reloadSession();
      await this.open();
      await this.search();
      await this.handleSearchResult();
    }
  }

  async select() {
    await this.handleSearchResult();
    await this.waitAndClick(this.calculator);
  }
}

module.exports = SearchPage;
