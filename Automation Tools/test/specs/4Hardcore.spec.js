const CalcPage = require('../pages/cloud.google.com/CalcPage');
const EmailPage = require('../pages/yopmail.com/EmailPage');

describe('Hurt Me Plenty', () => {
  let page;
  let page2;

  before(async() => {
    page = new CalcPage();
    page2 = new EmailPage();
    await page.open();
    await page.search();
    await page.select();
    await page.addToEst();
    await page2.openEmailService();
    await page2.generateEmail();
    await page2.copyEmail();
    await page.sendEmail();
    await page2.checkInbox();
  });

  it('the estimated cost should match the value from the email', async() => {
    const emailEstCost = await page2.getEstCost();
    const calcEstCost = await page.getEstCost();
    expect(emailEstCost).toEqual(calcEstCost);
  });
});
