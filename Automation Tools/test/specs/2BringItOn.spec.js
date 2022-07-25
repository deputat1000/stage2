const PastePage = require('../../test/pages/pastebin.com/PastePage');

describe('Bring It On', () => {
  const code = 
  `git config --global user.name  "New Sheriff in Town"
  git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  git push origin master --force`;
  const syntax = 'Bash';
  const name = 'how to gain dominance among developers';

  let page;

  before(async() => {
    page = new PastePage();
    await page.open();
    await page.createPaste(code, name, syntax);
  });

  it('the page title should match the entered name', async() => {
    expect(browser).toHaveTitleContaining(name);
  });
  it('should create new paste with selected syntax', async() => {
    const pasteSyntax = await page.getPasteSyntax();
    expect(pasteSyntax).toEqual(syntax);
  });
  it('should create new paste with entered code', async() => {
    const pasteCode = await page.getPasteCode();
    expect(pasteCode).toEqual(code);
  });
});
