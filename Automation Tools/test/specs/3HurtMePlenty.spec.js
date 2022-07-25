const CalcPage = require('../pages/cloud.google.com/CalcPage');

describe('Hurt Me Plenty', () => {
  const VMClass = 'Regular';
  const instType = 'n1-standard-8';
  const region = 'Frankfurt';
  const localSSD = '2x375';
  const commTerm = '1 Year';

  let page;

  before(async() => {
    page = new CalcPage();
    await page.open();
    await page.search();
    await page.select();
    await page.addToEst();
  });

  it('shoud match to selected VM Class', async() => {
    const estVMClass = await page.getVMClass();
    expect(estVMClass).toContain(VMClass);
  });
  it('shoud match to selected Instance type', async() => {
    const estInstType = await page.getInstType();
    expect(estInstType).toContain(instType);
  });
  it('shoud match to selected Region', async() => {
    const estRegion = await page.getRegion();
    expect(estRegion).toContain(region);
  });
  it('shoud match to selected Local SSD', async() => {
    const estlocalSSD = await page.getLocalSSD();
    expect(estlocalSSD).toContain(localSSD);
  });
  it('shoud match to selected Commitment term', async() => {
    const estCommTerm = await page.getCommTerm();
    expect(estCommTerm).toContain(commTerm);
  });
});
