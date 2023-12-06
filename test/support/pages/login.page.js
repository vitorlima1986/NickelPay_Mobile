const { $ } = require('@wdio/globals');

describe('Teste de Login', () => {
  it('deve realizar login com sucesso', async () => {
    const Entrar = $(android=new UiSelector().text("JÁ TENHO CONTA"));
    const CampoCPF = $(android=new UiSelector().text("Número do CPF/CNPJ"));
    const BtnEntrar = $(android=new UiSelector().text("ENTRAR"));

    // Ações de login utilizando os elementos diretamente
    await Entrar.click();
    await CampoCPF.setValue("11230470735");
    await BtnEntrar.click();

    // Adicione asserções conforme necessário para verificar se o login foi bem-sucedido
    // Por exemplo:
    // expect(await algumaCoisa.getText()).to.equal('Texto esperado');
  });
});
