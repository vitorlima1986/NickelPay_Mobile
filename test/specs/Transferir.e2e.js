// ////android.widget.TextView[@text="TRANSFERIR"] // Botaãoo transferir
// const { $ } = require('@wdio/globals');
// const { describe } = require('mocha');


// describe('Função PIX', () => {
//   it('deve realizar PIX com sucesso', async () => {
//     await $(`//android.widget.TextView[@text='JÁ TENHO CONTA']`).click();
//     await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
//     await $(`//android.widget.TextView[@text="ENTRAR"]`).waitForDisplayed();
//     await $(`//android.widget.TextView[@text="ENTRAR"]`).click();
//     await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
//     await $(`//android.widget.TextView[@text="TRANSFERIR"]`).click();
//     await $(`//android.widget.EditText[@resource-id="amount-input"]`).setValue("1,00");
//     await $(`//android.widget.TextView[@text="CONTINUAR"]`).click();
//     await $(`//android.widget.TextView[@text="Vitor lima da silva"]`).click();
//     // Clicar no elemento sem usar const, if, ou else
//     // await $('._highlighter-box_619e8._inspected-element-box_619e8').click();
//     await driver.$("xpath://android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup")
//       .click({force:true});
//     await $('//android.widget.TextView[@text="TRANSFERIR"])[2]').click()
//     // await $(`//android.widget.TextView[@text="TRANSFERIR"]`).waitForDisplayed();
//     // await $(`//android.widget.TextView[@text="TRANSFERIR"]`).click();
//     await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
//     await $('//android.widget.TextView[@text="COMPROVANTE DE TRANSFERÊNCIA"]').waitForDisplayed({ timeout: 5000 });
//     console.log('O elemento COMPROVANTE DE TRANSFERÊNCIA está visível? ', $('[id="payment-receipt-title"]').isDisplayed());

//   });
// });


