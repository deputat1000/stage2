const CalcPage = require('../pages/cloud.google.com/CalculatorPage');

describe('Hurt Me Plenty', () => {
  const vmClass = 'Regular';
  const instanceType = 'n1-standard-8';
  const region = 'Frankfurt';
  const localSSD = '2x375';
  const commitmentTerm = '1 Year';

  let page;

  before(async() => {
    page = new CalcPage();
    
    await page.open();
    await page.search();
    await page.select();
    await page.addToEstimate();
  });

  it('shoud match to selected VM Class', async() => {
    const estimatedVMClass = await page.getVMClass();
    expect(estimatedVMClass).toContain(vmClass);
  });
  it('shoud match to selected Instance type', async() => {
    const estimatedInstanceType = await page.getInstanceType();
    expect(estimatedInstanceType).toContain(instanceType);
  });
  it('shoud match to selected Region', async() => {
    const estimatedRegion = await page.getRegion();
    expect(estimatedRegion).toContain(region);
  });
  it('shoud match to selected Local SSD', async() => {
    const estimatedlocalSSD = await page.getLocalSSD();
    expect(estimatedlocalSSD).toContain(localSSD);
  });
  it('shoud match to selected Commitment term', async() => {
    const estimatedCommitmentTerm = await page.getCommitmentTerm();
    expect(estimatedCommitmentTerm).toContain(commitmentTerm);
  });
});
