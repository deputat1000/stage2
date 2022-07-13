const HomePage = require('../../pages/HomePage');

describe('I Can Win', () => {
  const code = 'Hello from WebDriver';
  const name = 'helloweb';

  let page;

  before(async() => {
    page = new HomePage();
    await page.open();
    await page.createPaste(code, name);
  });
  
  it('should create new paste', () => {});
  
  after(async() => {
    await page.close();
  });
});
