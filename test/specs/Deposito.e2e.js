const { $ } = require('@wdio/globals');
const path = require('path');
const caminhoDoArquivoJSON = path.resolve(__dirname, '../../test/fixture/Comprovante.json');

// Importa o conteúdo do arquivo JSON
const conteudoJSON = require(caminhoDoArquivoJSON);

// Obtém o caminho do arquivo a partir do conteúdo do JSON
const caminhoDoArquivo = conteudoJSON.caminhoDoArquivo;
// const driver = await remote(opts);


describe('Deposito', () => {
  it('deve realizar deposito com sucesso', async () => {
    await $(`//android.widget.TextView[@text='JÁ TENHO CONTA']`).click();
    await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
    await $(`//android.widget.TextView[@text="ENTRAR"]`).waitForDisplayed();
    await $(`//android.widget.TextView[@text="ENTRAR"]`).click();
    await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
    await $(`//android.widget.TextView[@text="DEPOSITAR"]`).click();// botão depositar
    await $(`//android.widget.TextView[@text="Boleto"]`).click();
    await $(`//android.widget.EditText[@resource-id="amount"]`).setValue("21,00");
    await $(`//android.widget.TextView[@text="CRIAR BOLETO"]`).click();
    console.log((await $(`//android.widget.TextView[@text="COMPARTILHAR BOLETO"]`).isDisplayed()) ? 'O elemento está visível.' : '');
    return driver;

  })
  it('Não deve realizar deposito com sucesso', async () => {
    await $(`//android.widget.TextView[@text='JÁ TENHO CONTA']`).click();
    await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
    await $(`//android.widget.TextView[@text="ENTRAR"]`).waitForDisplayed();
    await $(`//android.widget.TextView[@text="ENTRAR"]`).click();
    await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
    await $(`//android.widget.TextView[@text="DEPOSITAR"]`).click();
    await $(`//android.widget.TextView[@text="Boleto"]`).click();
    await $(`//android.widget.EditText[@resource-id="amount"]`).setValue("19,99")
    console.log(!(await $(`//android.widget.TextView[@text="CRIAR BOLETO"]`).isEnabled()));

    return driver;


  });
  it('Deve realizar Transferência com sucesso', async () => {
    await $(`//android.widget.TextView[@text='JÁ TENHO CONTA']`).click();
    await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
    await $(`//android.widget.TextView[@text="ENTRAR"]`).waitForDisplayed();
    await $(`//android.widget.TextView[@text="ENTRAR"]`).click();
    await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
    await $(`//android.widget.TextView[@text="DEPOSITAR"]`).click();
    await $(`//android.widget.TextView[@text="Transferência"]`).click();
    await $(`//android.widget.TextView[@text="VAMOS COMEÇAR"]`).click(); // vamos começar
    await $(`//android.view.ViewGroup[@resource-id="only-account"]/android.view.ViewGroup[2]/android.view.ViewGroup`).click(); // conta individual
    await $(`//android.widget.TextView[@text="CONTINUAR"]`).click();
    await $(`//android.view.ViewGroup[@resource-id="account-owner-no"]/android.view.ViewGroup[2]/android.view.ViewGroup`).click();
    await $(`//android.widget.TextView[@text="CONTINUAR"]`).click();
    await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
    await $(`//android.widget.EditText[@text='Nome']`).setValue("Teste automatizado");
    await $(`//android.widget.TextView[@text="CONTINUAR"]`).click();
    await $(`//android.widget.EditText[@resource-id="date-input"]`).waitForDisplayed();
    //await $(`//android.widget.EditText[@resource-id="date-input"]`);
    await $(`//android.widget.TextView[@text="CONTINUAR"]`).click(); // é o continuar para confirmar a data
    await $(`//android.widget.EditText[@resource-id="amount-input"]`).setValue("30,00");
    await $(`//android.widget.TextView[@text="CONTINUAR"]`).click();
    
    await $(`//android.widget.TextView[@text="ENVIAR COMPROVANTE"]`).click();
    await $(`//*[@resource-id="00000000-0000-0061-ffff-ffff00000215"]`)
      .setValue(caminhoDoArquivo);
    await $(`//android.widget.TextView[@text="CONFIRMAR"]`).click();
    await browser.pause(10000); // pausa por 10000 milissegundos (10 segundos)
    await driver.deleteSession();
  });



});

// // const { $ } = require('@wdio/globals');
// // const path = require('path');

// // // Caminho do arquivo JSON de comprovante
// // const caminhoDoArquivoJSON = path.resolve(__dirname, '../../test/fixture/Comprovante.json');

// // // Importa o conteúdo do arquivo JSON
// // const conteudoJSON = require(caminhoDoArquivoJSON);

// // // Obtém o caminho do arquivo a partir do conteúdo do JSON
// // const caminhoDoArquivo = conteudoJSON.caminhoDoArquivo;

// // describe('Deposito', () => {
// //     it('Deve realizar depósito com sucesso', async () => {
// //         try {
// //             // Preenche informações de login
// //             await preencherInformacoesDeLogin("11230470735", "92121Aa!");

// //             // Realiza o depósito
// //             await realizarDeposito("21,00");

// //             // Verifica se o comprovante está visível
// //             await verificarVisibilidadeElemento(`//android.widget.TextView[@text="COMPARTILHAR BOLETO"]`);
// //         } catch (error) {
// //             console.error('Erro no teste Deve realizar depósito com sucesso:', error);
// //         }
// //     });

// //     it('Não deve realizar depósito com sucesso', async () => {
// //         try {
// //             // Preenche informações de login
// //             await preencherInformacoesDeLogin("11230470735", "92121Aa!");

// //             // Tenta realizar um depósito inválido
// //             await tentarDepositoInvalido("19,99");
// //         } catch (error) {
// //             console.error('Erro no teste Não deve realizar depósito com sucesso:', error);
// //         }
// //     });

// //     it('Deve realizar Transferência com sucesso', async () => {
// //         try {
// //             // Preenche informações de login
// //             await preencherInformacoesDeLogin("11230470735", "92121Aa!");

// //             // Realiza a transferência
// //             await realizarTransferencia("30,00");

// //             // Envia o comprovante
// //             await enviarComprovante();

// //             // Confirma a transferência
// //             await confirmarTransferencia();
// //         } catch (error) {
// //             console.error('Erro no teste Deve realizar Transferência com sucesso:', error);
// //         }
// //     });
// // });

// // /**
// //  * Verifica a visibilidade de um elemento.
// //  * @param {string} xpath - XPath do elemento.
// //  */
// // async function verificarVisibilidadeElemento(xpath) {
// //     try {
// //         await $(xpath).waitForExist({ timeout: 10000 });
// //         console.log(`O elemento está visível: ${(await $(xpath).isDisplayed())}`);
// //     } catch (error) {
// //         console.warn(`Aviso: Não foi possível verificar a visibilidade do elemento ${xpath}.`, error.message);
// //         // Não interrompe o teste em caso de erro, apenas registra um aviso.
// //         // Se desejar, você pode adicionar lógica adicional aqui, como fazer algo específico em caso de falha.
// //     }
// // }

// // /**
// //  * Preenche as informações de login.
// //  * @param {string} numeroCPF - Número do CPF/CNPJ.
// //  * @param {string} senha - Senha de login.
// //  */
// // async function preencherInformacoesDeLogin(numeroCPF, senha) {
// //     await $("//android.widget.TextView[@text='JÁ TENHO CONTA']").click();
// //     await $("//android.widget.EditText[@text='Número do CPF/CNPJ']").setValue(numeroCPF);
// //     await $("//android.widget.TextView[@text='ENTRAR']").waitForDisplayed();
// //     await $("//android.widget.TextView[@text='ENTRAR']").click();
// //     await $("//android.widget.EditText[@resource-id='pin-password']").setValue(senha);
// // }

// // /**
// //  * Realiza um depósito válido.
// //  * @param {string} valorDeposito - Valor do depósito.
// //  */
// // async function realizarDeposito(valorDeposito) {
// //     await $("//android.widget.TextView[@text='DEPOSITAR']").click();
// //     await $("//android.widget.TextView[@text='Boleto']").click();
// //     await $("//android.widget.EditText[@resource-id='amount']").setValue(valorDeposito);
// //     await $("//android.widget.TextView[@text='CRIAR BOLETO']").click();
// //     console.log(await $("//android.widget.TextView[@text='COMPARTILHAR BOLETO']").isDisplayed() ? 'O elemento está visível.' : '');
// // }

// // /**
// //  * Tenta realizar um depósito inválido.
// //  * @param {string} valorDeposito - Valor do depósito inválido.
// //  */
// // async function tentarDepositoInvalido(valorDeposito) {
// //     // Tenta realizar um depósito inválido
// //     await $("//android.widget.TextView[@text='DEPOSITAR']").click();
// //     await $("//android.widget.TextView[@text='Boleto']").click();
// //     await $("//android.widget.EditText[@resource-id='amount']").setValue(valorDeposito);
// //     console.log(!(await $("//android.widget.TextView[@text='CRIAR BOLETO']").isEnabled()));
// // }

// // /**
// //  * Realiza uma transferência.
// //  * @param {string} valorTransferencia - Valor da transferência.
// //  */
// // async function realizarTransferencia(valorTransferencia) {
// //     await $("//android.widget.TextView[@text='Transferência']").click();
// //     await $("//android.view.ViewGroup[@resource-id='lets-go']").click();
// //     await $("//android.view.ViewGroup[@resource-id='only-account']/android.view.ViewGroup[2]/android.view.ViewGroup").click();
// //     await $("//android.widget.TextView[@text='CONTINUAR']").click();
// //     await $("//*[@resource-id='00000000-0000-0061-ffff-ffff00000103']").click();
// //     await $("//android.widget.TextView[@text='CONTINUAR']").click();
// //     console.log(`O elemento date-input está visível: ${(await $("//android.widget.TextView[contains(@class, 'date-input') and @text='date-input']").isDisplayed())}`);
// //     await $("//android.widget.TextView[@text='CONTINUAR']").click();
// //     await $("//android.widget.EditText[contains(@class, 'amount-input') and @text='amount-input']").setValue(valorTransferencia);
// //     await $("//android.widget.TextView[@text='CONTINUAR']").click();
// //     console.log(`O valor "${valorTransferencia}" está presente: ${(await $("//android.widget.TextView[@text='${valorTransferencia}']").isDisplayed())}`);
// // }

// // /**
// //  * Envia o comprovante.
// //  */
// // async function enviarComprovante() {
// //     await $("//android.widget.TextView[@text='ENVIAR COMPROVANTE']").click();
// //     await $("//*[@resource-id='00000000-0000-0061-ffff-ffff00000215']")
// //         .setValue(caminhoDoArquivo);
// // }

// // /**
// //  * Confirma a transferência.
// //  */
// // async function confirmarTransferencia() {
// //     await $("//android.widget.TextView[@text='CONFIRMAR']").click();
// //     await browser.pause(10000);
// // }
// const { $ } = require('@wdio/globals');
// const path = require('path');

// // Função para manipular alertas
// async function handleAlert() {
//   const isAlertPresent = await driver.alertIsPresent();

//   if (isAlertPresent) {
//     const alertText = await driver.getAlertText();
//     console.log(`Texto do Alerta: ${alertText}`);

//     // Adicione lógica para aceitar ou rejeitar o alerta conforme necessário
//     await driver.acceptAlert(); // ou driver.dismissAlert();
//   }
// }

// // Função para realizar o login
// async function realizarLogin(cpf, senha) {
//   await $("//android.widget.TextView[@text='JÁ TENHO CONTA']").click();
//   await $("//android.widget.EditText[@text='Número do CPF/CNPJ']").setValue(cpf);
//   await $("//android.widget.TextView[@text='ENTRAR']").waitForDisplayed();
//   await $("//android.widget.TextView[@text='ENTRAR']").click();
//   await $("//android.widget.EditText[@resource-id='pin-password']").setValue(senha);
// }

// // Função para realizar depósito
// async function realizarDeposito(valorDeposito) {
//   await $("//android.widget.TextView[@text='DEPOSITAR']").click();
//   await $("//android.widget.TextView[@text='Boleto']").click();
//   await $("//android.widget.EditText[@resource-id='amount']").setValue(valorDeposito);
//   await $("//android.widget.TextView[@text='CRIAR BOLETO']").click();
//   await handleAlert();
// }

// // Testes
// describe('Deposito', () => {
//   it('deve realizar depósito com sucesso', async () => {
//     await realizarLogin("11230470735", "92121Aa!");
//     await realizarDeposito("21,00");
//     console.log((await $("//android.widget.TextView[@text='COMPARTILHAR BOLETO']").isDisplayed()) ? 'O elemento está visível.' : '');
//   });

//   it('Não deve realizar depósito com sucesso', async () => {
//     await realizarLogin("11230470735", "92121Aa!");
//     await realizarDeposito("19,99");
//     console.log(!(await $("//android.widget.TextView[@text='CRIAR BOLETO']").isEnabled()));
//   });

//   it('Deve realizar Transferência com sucesso', async () => {
//     await realizarLogin("11230470735", "92121Aa!");
//     await $("//android.widget.TextView[@text='Transferência']").click();
//     // Adicione o restante das etapas para a transferência
//     // ...
//   });
// // });
// const { $ } = require('@wdio/globals');
// //const path = require('path');

// // Função para manipular alertas
// async function handleAlert() {
//   try {
//     const isAlertPresent = await driver.isAlertOpen();
    
//     if (isAlertPresent) {
//       const alertText = await driver.getAlertText();
//       console.log(`Texto do Alerta: ${alertText}`);
      
//       // Adicione lógica para aceitar ou rejeitar o alerta conforme necessário
//       await driver.acceptAlert(); // ou driver.dismissAlert();
//     } else {
//       console.log('Nenhum alerta presente na tela.');
//     }
//   } catch (error) {
//     console.error('Erro ao manipular alerta:', error);
//   }
// }

// // Função para realizar o login
// async function realizarLogin(cpf, senha) {
//   const Entrar = $('android=new UiSelector().text("JÁ TENHO CONTA")');
//   const CampoCPF = $('android=new UiSelector().text("Número do CPF/CNPJ")');
//   const BtnEntrar = $('android=new UiSelector().text("ENTRAR")');
//   const CampoSenha = $('android=new UiSelector().resourceId("pin-password")');

//   await Entrar.click();
//   await CampoCPF.setValue(cpf);
//   await BtnEntrar.waitForDisplayed();
//   await BtnEntrar.click();
//   await CampoSenha.setValue(senha);
//   }

// // Função para realizar depósito
// async function realizarDeposito(valorDeposito) {
//   const BtnDepositar = $('android=new UiSelector().text("DEPOSITAR")');
//   const BtnBoleto = $('android=new UiSelector().text("Boleto")');
//   const CampoValor = $('android=new UiSelector().resourceId("amount")');
//   const BtnCriarBoleto = $('android=new UiSelector().text("CRIAR BOLETO")');

//   await BtnDepositar.click();
//   await BtnBoleto.click();
//   await CampoValor.setValue(valorDeposito);
//   await BtnCriarBoleto.click();
//   await handleAlert();
// }

// // Testes
// describe('Deposito', () => {
//   it('deve realizar depósito com sucesso', async () => {
//     await realizarLogin("11230470735", "92121Aa!");
//     await realizarDeposito("21,00");
//     console.log((await $('android=new UiSelector().text("COMPARTILHAR BOLETO")').isDisplayed()) ? 'O elemento está visível.' : '');
//     browser.fecharApp();
//   });

//   it('deve realizar depósito com sucesso', async () => {
//     await realizarLogin("11230470735", "92121Aa!");
//     await realizarDeposito("19,00");
//     console.log(!(await $('android=new UiSelector().text("COMPARTILHAR BOLETO")').isDisplayed()) ? 'O elemento não está visível.' : '');
//     browser.fecharApp();
//   });

// });
// const { remote } = require('webdriverio');
// const { openApp, closeApp } = require('appium-adb');

// // Função para manipular alertas
// async function handleAlert() {
//   try {
//     const isAlertPresent = await driver.isAlertOpen();

//     if (isAlertPresent) {
//       const alertText = await driver.getAlertText();
//       console.log(`Texto do Alerta: ${alertText}`);

//       // Adicione lógica para aceitar ou rejeitar o alerta conforme necessário
//       await driver.acceptAlert(); // ou driver.dismissAlert();
//     } else {
//       console.log('Nenhum alerta presente na tela.');
//     }
//   } catch (error) {
//     console.error('Erro ao manipular alerta:', error);
//   }
// }

// // Função para realizar o login
// async function realizarLogin(cpf, senha) {
//   const Entrar = await $('android=new UiSelector().text("JÁ TENHO CONTA")');
//   const CampoCPF = await $('android=new UiSelector().text("Número do CPF/CNPJ")');
//   const BtnEntrar = await $('android=new UiSelector().text("ENTRAR")');
//   const CampoSenha = await $('android=new UiSelector().resourceId("pin-password")');

//   await Entrar.click();
//   await CampoCPF.setValue(cpf);
//   await BtnEntrar.waitForDisplayed();
//   await BtnEntrar.click();
//   await CampoSenha.setValue(senha);
//   await browser.pause(3000); // Pausa por 3000 milissegundos (3 segundos)
//   // Continua com as ações após o preenchimento da senha
// }


// // Função para realizar depósito
// async function realizarDeposito(valorDeposito) {
//   const BtnDepositar = await $('android=new UiSelector().text("DEPOSITAR")');
//   const BtnBoleto = await $('android=new UiSelector().text("Boleto")');
//   const CampoValor = await $('android=new UiSelector().resourceId("amount")');
//   const BtnCriarBoleto = await $('android=new UiSelector().text("CRIAR BOLETO")');

//   await BtnDepositar.click();
//   await BtnBoleto.click();
//   await CampoValor.setValue(valorDeposito);
//   await BtnCriarBoleto.click();
//   await handleAlert();
// }

// Testes
// describe('Deposito', () => {
//   beforeEach(async () => {
//     // Abra o aplicativo antes de cada teste
//     await openApp();
//   });

//   afterEach(async () => {
//     // Feche o aplicativo após cada teste
//     await closeApp();
//   });

//   it('deve realizar depósito com sucesso - 21,00', async () => {
//     await realizarLogin("11230470735", "92121Aa!");
//     await realizarDeposito("21,00");
//     console.log((await $('android=new UiSelector().text("COMPARTILHAR BOLETO")').isDisplayed()) ? 'O elemento está visível.' : '');
//   });

//   it('Não deve realizar depósito com sucesso - 19,00', async () => {
//     await realizarLogin("11230470735", "92121Aa!");
//     await realizarDeposito("19,00");
//     console.log(!(await $('android=new UiSelector().text("COMPARTILHAR BOLETO")').isDisplayed()) ? 'O elemento não está visível.' : '');
//   });
// });
