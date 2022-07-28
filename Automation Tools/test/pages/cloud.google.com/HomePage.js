const Page = require('../Page');

class HomePage extends Page {
  get searchButton() { return $('.devsite-search-form') }
  get searchBox() { return $(`//input[@aria-label='Search']`) }

  async open() {
    await super.open('https://cloud.google.com');
  }
  
  async search() {
    await this.searchButton.click();
    await this.searchBox.setValue('Google Cloud Platform Pricing Calculator');
    await browser.keys('Return');
  }
}

module.exports = HomePage;
