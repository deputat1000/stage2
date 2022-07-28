class Page {
  async open(url) {
    await browser.url(url);
    await browser.maximizeWindow();
  }

  async getText(element) {
    await element.waitForExist();
    const text = await element.getText();
    return text;
  }

  async waitAndClick(element) {
    await element.scrollIntoView(false);
    await element.waitForClickable();
    await element.click();
  }
}

module.exports = Page;
