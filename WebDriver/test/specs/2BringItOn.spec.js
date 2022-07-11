const {expect} = require('chai');
const NewPastePage = require('../../pages/NewPastePage');

describe('Bring It On', () => {
  const code = 
  `git config --global user.name  "New Sheriff in Town"
  git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  git push origin master --force`,
    syntax = 'Bash',
    name = 'how to gain dominance among developers';

  before(async() => {
    page = new NewPastePage();
    await page.open();
    await page.createPaste(code, name);
  });

  it('should create new paste with entered name', async() => {
    const pasteName = await page.getPasteName();
    expect(pasteName).to.be.equal(name);
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
    page = null;
  });
});
