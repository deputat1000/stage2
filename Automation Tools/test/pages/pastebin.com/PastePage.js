const HomePage = require('./HomePage');

class PastePage extends HomePage {
  get syntax() { return $(`//a[@class='btn -small h_800']`) }
  get code() { return $(`//textarea[@class='textarea -raw js-paste-raw']`) }

  async getPasteSyntax() {
    const syntaxText = await super.getText(this.syntax);
    return syntaxText;
  }
  
  async getPasteCode() {
    const codeText = await super.getText(this.code);
    return codeText;
  }
}

module.exports = PastePage;
