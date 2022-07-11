const NewPaste = require('../../pages/NewPastePage');

describe('I Can Win', () => {
  const code = 'Hello from WebDriver', name = 'helloweb';

  before(async() => {
    page = new NewPaste();
    await page.open();
    await page.createPaste(code, name);
  });
  
  it('should create new paste', () => {});
  
  after(async() => {
    await page.close();
    page = null;
  });
});
