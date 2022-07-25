const SearchPage = require('./SearchPage');

class CalcPage extends SearchPage {
  get compEng() { return $(`//div[@title='Compute Engine']`) }
  get instNum() { return $(`//input[@name='quantity']`) }
  get osList() { return $(`//md-select[@ng-model='listingCtrl.computeServer.os']`) }
  get freeOS() { return $(`//md-option[@value='free']`) }
  get modList() { return $(`//md-select[@placeholder='VM Class']`) } 
  get regMod() { return $(`//md-option[@value='regular']`) } 
  get seriesList() { return $(`//md-select[@name='series']`) }
  get n1() { return $(`//md-option[@value='n1']`) }
  get typeList() { return $(`//md-select[@placeholder='Instance type']`) } 
  get n1st8() { return $(`//md-option[@value='CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8']`) }
  get addGPU() { return $(`//md-checkbox[@aria-label='Add GPUs']`) }
  get gpuTypeList() { return $(`//md-select[@placeholder='GPU type']`) }
  get teslaV100() { return $(`//md-option[@value='NVIDIA_TESLA_V100']`) }
  get gpuNumList() { return $(`//md-select[@placeholder='Number of GPUs']`) }
  get gpuNum1() { return $(`//md-option[@ng-disabled='item.value != 0 && item.value < listingCtrl.minGPU' and @value='1']`) }
  get ssdList() { return $(`//md-select[@placeholder='Local SSD']`) }
  get ssd2x375() { return $('#select_option_440') }
  get locList() { return $(`//md-select[@placeholder='Datacenter location']`) }
  get frankfurt() { return $('#select_option_222') }
  get usageList() { return $(`//md-select[@placeholder='Committed usage']`) }
  get year1() { return $('#select_option_124') }
  get addBtn() { return $(`//button[@aria-label='Add to Estimate']`) }
  get estVMClass() { return $(`//div[contains(text(),'Provisioning model')]`) }
  get estInstType() { return $(`//div[contains(text(),'Instance type')]`) }
  get estRegion() { return $(`//div[contains(text(),'Region')]`) }
  get estLocalSSD() { return $(`//div[contains(text(),'Local SSD')]`) }
  get estCommTerm() { return $(`//div[contains(text(),'Commitment term')]`) }
  get estCost() { return $(`//b[contains(text(),'Total Estimated Cost')]`) }
  get emailEstBtn() { return $(`//button[@title='Email Estimate']`) }
  get emailInputField() { return $(`//input[@type='email']`) }
  get sendEmailBtn() { return $(`//button[@aria-label='Send Email']`) }

  async switchFrames() {
    await $('//iframe').waitForExist();
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
  }

  async addToEst() {
    await this.switchFrames();
    await super.waitAndClick(this.compEng);
    await this.instNum.setValue('4');
    await super.waitAndClick(this.osList);
    await super.waitAndClick(this.freeOS);
    await super.waitAndClick(this.modList);
    await super.waitAndClick(this.regMod);
    await super.waitAndClick(this.seriesList);
    await super.waitAndClick(this.n1);
    await super.waitAndClick(this.typeList);
    await super.waitAndClick(this.n1st8);
    await super.waitAndClick(this.addGPU);
    await super.waitAndClick(this.gpuTypeList);
    await super.waitAndClick(this.teslaV100);
    await super.waitAndClick(this.gpuNumList);
    await super.waitAndClick(this.gpuNum1);
    await super.waitAndClick(this.ssdList);
    await super.waitAndClick(this.ssd2x375);
    await super.waitAndClick(this.locList);
    await super.waitAndClick(this.frankfurt);
    await super.waitAndClick(this.usageList);
    await super.waitAndClick(this.year1);
    await super.waitAndClick(this.addBtn);
  }

  async getVMClass() {
    const VMClassText = await super.getText(this.estVMClass);
    return VMClassText;
  }

  async getInstType() {
    const instTypeText = await super.getText(this.estInstType);
    return instTypeText;
  }

  async getRegion() {
    const regionText = await super.getText(this.estRegion);
    return regionText;
  }
  
  async getLocalSSD() {
    const localSSDText = await super.getText(this.estLocalSSD);
    return localSSDText;
  }

  async getCommTerm() {
    const commTermText = await super.getText(this.estCommTerm);
    return commTermText;
  }

  async getCommTerm() {
    const commTermText = await super.getText(this.estCommTerm);
    return commTermText;
  }

  async getEstCost() {
    await this.switchFrames();
    const cost = parseFloat((await super.getText(this.estCost)).replace(/\D+/, '').replace(/,/, ''));
    return cost;
  }

  async sendEmail() {
    await this.switchFrames();
    await super.waitAndClick(this.emailEstBtn);
    await super.waitAndClick(this.emailInputField);
    await browser.keys(['Shift', 'Insert']);
    await super.waitAndClick(this.sendEmailBtn);
    await browser.switchWindow('yopmail.com');
  }
}

module.exports = CalcPage;
