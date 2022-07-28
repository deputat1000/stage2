const CalculatorPage = require('../pages/cloud.google.com/CalculatorPage');
const EmailPage = require('../pages/yopmail.com/EmailPage');

describe('Hardcore', () => {
  let google;
  let yopmail;

  before(async() => {
    google = new CalculatorPage();
    yopmail = new EmailPage();
    
    await google.open();
    await google.search();
    await google.select();
    await google.addToEstimate();
    await yopmail.open();
    await yopmail.generateEmail();
    await yopmail.copyEmail();
    await google.sendEmail();
    await yopmail.checkInbox();
  });

  it('the estimated cost should match the value from the email', async() => {
    const emailCost = await yopmail.getCost();
    const calculatorCost = await google.getCost();
    expect(emailCost).toEqual(calculatorCost);
  });
});
