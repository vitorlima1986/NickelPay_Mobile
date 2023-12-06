// const { $ } = require('@wdio/globals');

// describe('Teste de Login', () => {
//   it('deve realizar login com sucesso', async () => {
//     const Entrar = $('android=new UiSelector().text("JÁ TENHO CONTA")');
//     const CampoCPF = $('android=new UiSelector().text("Número do CPF/CNPJ")');
//     const BtnEntrar = $('android=new UiSelector().text("ENTRAR")');

//     // Ações de login utilizando os elementos diretamente
//     await Entrar.click();
//     await CampoCPF.setValue("11230470735");
//     await BtnEntrar.click();

//   });

//   it('deve realizar login sem sucesso', async () => {
//     const Entrar = $('android=new UiSelector().text("JÁ TENHO CONTA")');
//     const CampoCPF = $('android=new UiSelector().text("Número do CPF/CNPJ")');
//     const BtnEntrar = $('android=new UiSelector().text("ENTRAR")');
//     const CampoSenha = $('android=new UiSelector().resourceId("pin-password")');

//     // Ações de login sem sucesso utilizando os elementos diretamente
//     await Entrar.click();
//     await CampoCPF.setValue("11230470735");
//     await BtnEntrar.click();
//     await CampoSenha.setValue("92121P!");

//     // Verifica se o elemento de mensagem de erro está visível
//     console.log(`O elemento está ${(await $('android=new UiSelector().text("Senha e/ou usuário inválidos")').isDisplayed()) ? 'visível' : 'NÃO visível'} na tela.`);
//   });
// });
