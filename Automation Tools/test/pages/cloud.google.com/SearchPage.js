const HomePage = require('./HomePage');

class SearchPage extends HomePage {
  get calc() { return $(`//a[@data-ctorig='https://cloud.google.com/products/calculator']`) }
  get searchBugMark() { return $('//aside') }

  async select() {
    await super.refresh(this.calc, this.searchBugMark);
    await this.calc.click();
  }
}

module.exports = SearchPage;
