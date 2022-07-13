const {expect} = require('chai');
const PastePage = require('../../pages/PastePage');

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
    const title = await page.getTitle();
    expect(title).to.include(name);
  });

  it('should create new paste with selected syntax', async() => {
    const pasteSyntax = await page.getPasteSyntax();
    expect(pasteSyntax).to.be.equal(syntax);
  });

  it('should create new paste with entered code', async() => {
    const pasteCode = await page.getPasteCode();
    expect(pasteCode).to.be.equal(code);
  });

  after(async() => {
    await page.close();
  });
});
