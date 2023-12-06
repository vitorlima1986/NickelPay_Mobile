// const { $ } = require('@wdio/globals');
// const path = require('path');

// describe.only('Pagamento', () => {
//     it('Deve realizar pagamento com sucesso', async () => {
//         await $(`//android.widget.TextView[@text='JÁ TENHO CONTA']`).click();
//         await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
//         await $(`//android.widget.TextView[@text="ENTRAR"]`).waitForDisplayed();
//         await $(`//android.widget.TextView[@text="ENTRAR"]`).click();
//         await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
//         await $('//android.view.ViewGroup[@resource-id="Pagar"]/android.view.View').waitForDisplayed();
//         await $('//android.view.ViewGroup[@resource-id="Pagar"]/android.view.View').click();
//         await $('//android.widget.TextView[@text="Boleto ou Conta"]').waitForDisplayed();
//         await $('//android.widget.TextView[@text="Boleto ou Conta"]').click();
//         (async () => {
//             const denyButton = $('android=new UiSelector().resourceId("com.android.packageinstaller:id/permission_deny_button")');

//             if (await denyButton.isDisplayed()) {
//                 await denyButton.click();
//             } else {
//                 console.log('O botão de negação de permissão não está visível.');
//                 // Adicione aqui o código para passar para o próximo passo, se necessário
//             }
//         })();
//         await $('android=new UiSelector().text("DIGITAR CÓDIGO MANUAL")').waitForDisplayed();
//         await $('android=new UiSelector().text("DIGITAR CÓDIGO MANUAL")').click();
//         await $('android=new UiSelector().resourceId("barcode")').waitForDisplayed();
//         await $('android=new UiSelector().resourceId("barcode")').setValue('23793381286008301352856000063307789840000150000');
//         await $(`//android.view.ViewGroup[@resource-id="confirm"]`).click();
//         await $('android=new UiSelector().text("Adicionar descrição")').setValue('Teste automatizado');
//         await $('android=new UiSelector().text("CONFIRMAR")').click();
//         await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
//         console.log('O elemento está ' + (await $('android.widget.TextView[@text="COMPROVANTE DE AGENDAMENTO PAGAMENTO"]').isDisplayed() ? 'visível' : 'NÃO visível') + ' na tela.');


//     });
// });

