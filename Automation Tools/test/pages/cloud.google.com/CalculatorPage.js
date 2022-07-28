const SearchPage = require('./SearchPage');

class CalculatorPage extends SearchPage {
  get computeEngine() { return $(`//div[@title='Compute Engine']`) }
  get instanceNumber() { return $(`//input[@name='quantity']`) }
  get osList() { return $(`//md-select[@ng-model='listingCtrl.computeServer.os']`) }
  get freeOS() { return $(`//md-option[@value='free']`) }
  get modelList() { return $(`//md-select[@placeholder='VM Class']`) } 
  get regular() { return $(`//md-option[@value='regular']`) } 
  get seriesList() { return $(`//md-select[@name='series']`) }
  get n1() { return $(`//md-option[@value='n1']`) }
  get typeList() { return $(`//md-select[@placeholder='Instance type']`) } 
  get n1standart8() { return $(`//md-option[@value='CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8']`) }
  get addGPU() { return $(`//md-checkbox[@aria-label='Add GPUs']`) }
  get gpuFormReady() { return $(`//md-checkbox[@aria-label='Add GPUs' and @aria-checked='true']`) }
  get gpuTypeList() { return $(`//md-select[@placeholder='GPU type']`) }
  get teslaV100() { return $(`//md-option[@value='NVIDIA_TESLA_V100']`) }
  get gpuNumberList() { return $(`//md-select[@placeholder='Number of GPUs']`) }
  get gpu1() { return $(`//md-option[@ng-disabled='item.value != 0 && item.value < listingCtrl.minGPU' and @value='1']`) }
  get ssdList() { return $(`//md-select[@placeholder='Local SSD']`) }
  get ssd2x375() { return $('#select_option_440') }
  get locationList() { return $(`//md-select[@placeholder='Datacenter location']`) }
  get frankfurt() { return $('#select_option_222') }
  get usageList() { return $(`//md-select[@placeholder='Committed usage']`) }
  get year1() { return $('#select_option_124') }
  get addButton() { return $(`//button[@aria-label='Add to Estimate']`) }
  get vmClass() { return $(`//div[contains(text(),'Provisioning model')]`) }
  get instanceType() { return $(`//div[contains(text(),'Instance type')]`) }
  get region() { return $(`//div[contains(text(),'Region')]`) }
  get localSSD() { return $(`//div[contains(text(),'Local SSD')]`) }
  get commitmentTerm() { return $(`//div[contains(text(),'Commitment term')]`) }
  get cost() { return $(`//b[contains(text(),'Total Estimated Cost')]`) }
  get emailEstimateButton() { return $(`//button[@title='Email Estimate']`) }
  get emailFormReady() { return $(`//md-content[@aria-hidden='true']`) }
  get emailInputField() { return $(`//input[@type='email']`) }
  get sendEmailButton() { return $(`//button[@aria-label='Send Email']`) }

  async switchFrames() {
    await $('//iframe').waitForExist();
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
  }

  async addToEstimate() {
    await this.switchFrames();
    await super.waitAndClick(this.computeEngine);
    await this.instanceNumber.setValue('4');
    await super.waitAndClick(this.osList);
    await super.waitAndClick(this.freeOS);
    await super.waitAndClick(this.modelList);
    await super.waitAndClick(this.regular);
    await super.waitAndClick(this.seriesList);
    await super.waitAndClick(this.n1);
    await super.waitAndClick(this.typeList);
    await super.waitAndClick(this.n1standart8);
    await super.waitAndClick(this.addGPU);
    await this.gpuFormReady.waitForExist();
    await super.waitAndClick(this.gpuTypeList);
    await super.waitAndClick(this.teslaV100);
    await super.waitAndClick(this.gpuNumberList);
    await super.waitAndClick(this.gpu1);
    await super.waitAndClick(this.ssdList);
    await super.waitAndClick(this.ssd2x375);
    await super.waitAndClick(this.locationList);
    await super.waitAndClick(this.frankfurt);
    await super.waitAndClick(this.usageList);
    await super.waitAndClick(this.year1);
    await super.waitAndClick(this.addButton);
  }

  async getVMClass() {
    const vmClassText = await super.getText(this.vmClass);
    return vmClassText;
  }

  async getInstanceType() {
    const instanceTypeText = await super.getText(this.instanceType);
    return instanceTypeText;
  }

  async getRegion() {
    const regionText = await super.getText(this.region);
    return regionText;
  }
  
  async getLocalSSD() {
    const localSSDText = await super.getText(this.localSSD);
    return localSSDText;
  }

  async getCommitmentTerm() {
    const commitmentTermText = await super.getText(this.commitmentTerm);
    return commitmentTermText;
  }

  async getCost() {
    await this.switchFrames();
    const cost = parseFloat((await super.getText(this.cost)).replace(/^\D+|,/g, ''));
    return cost;
  }

  async sendEmail() {
    await this.switchFrames();
    await super.waitAndClick(this.emailEstimateButton);
    await this.emailFormReady.waitForExist();
    await super.waitAndClick(this.emailInputField);
    await browser.keys(['Shift', 'Insert']);
    await super.waitAndClick(this.sendEmailButton);
    await browser.switchWindow('yopmail.com');
  }
}

module.exports = CalculatorPage;
