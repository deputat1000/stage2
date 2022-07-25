const EC = require('wdio-wait-for');

class Page {
  async open(url) {
    await browser.url(url);
    await browser.maximizeWindow();
  }

  async getText(el) {
    await el.waitForExist();
    const text = await el.getText();
    return text;
  }

  async waitAndClick(el) {
    await el.waitForClickable();
    await el.click();
  }

  async refresh(el, mark, refreshBtn) {
    const check = await browser.waitUntil(EC.or(EC.elementToBeClickable(el), EC.presenceOf(mark)));

    while(await mark.isExisting()) {
      if (refreshBtn) {
        await refreshBtn.click();
      }
      else {
        await browser.refresh();
      }
      await browser.pause(1000);
      await check;
    }
  }
}

module.exports = Page;
