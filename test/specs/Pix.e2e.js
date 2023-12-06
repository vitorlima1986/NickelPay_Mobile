// const { $ } = require('@wdio/globals');


// describe('Função PIX', () => {
//   it('deve realizar PIX com sucesso', async () => {
//     await $(`//android.widget.TextView[@text='JÁ TENHO CONTA']`).click();
//     await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
//     await $(`//android.widget.TextView[@text="ENTRAR"]`).waitForDisplayed();
//     await $(`//android.widget.TextView[@text="ENTRAR"]`).click();
//     await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
//     await $(`//android.widget.TextView[@text="PIX"]`).click();
//     await $('//android.widget.TextView[@text="Transferir"]').click();
//     await $(`//android.widget.EditText[@resource-id="amount-input"]`).setValue("1,00");
//     await $(`//android.widget.TextView[@text="CONTINUAR"]`).click();
//     await $('//android.widget.EditText[@resource-id="key-pix"]').setValue("05216208000166");
//     await $('(//android.widget.TextView[@text="TRANSFERIR"])[2]').click();
//     await $('(//android.widget.TextView[@text="TRANSFERIR"])[3]').click();
//     await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
//     await $('//android.widget.TextView[@text="COMPROVANTE DE TRANSFERÊNCIA"]').waitForDisplayed({ timeout: 5000 });
//     console.log('O elemento COMPROVANTE DE TRANSFERÊNCIA está visível? ', $('[id="payment-receipt-title"]').isDisplayed());
//   });
//   it('deve gerar uma Cobrança PIX com sucesso', async () => {
//     await $(`//android.widget.TextView[@text='JÁ TENHO CONTA']`).click();
//     await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
//     await $(`//android.widget.TextView[@text="ENTRAR"]`).waitForDisplayed();
//     await $(`//android.widget.TextView[@text="ENTRAR"]`).click();
//     await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
//     await $(`//android.widget.TextView[@text="PIX"]`).click();
//     await $('//android.widget.TextView[@text="Cobrar"]').click();
//     await $(`//android.widget.EditText[@resource-id="amount-input"]`).setValue("1,00");
//     await $(`//android.widget.TextView[@text="CONTINUAR"]`).click();
//     await $(`//android.widget.TextView[@text="CRIAR QR CODE"]`).click();
//     await $('//android.widget.TextView[@text="Cobrar PIX"]').waitForDisplayed({ timeout: 5000 });
//     console.log('O elemento de Cobrança está visível? ', $('[@text="Cobrar PIX"]').isDisplayed());
//   });
//   it('deve gerar um deposito PIX com sucesso', async () => {
//     await $(`//android.widget.TextView[@text='JÁ TENHO CONTA']`).click();
//     await $(`//android.widget.EditText[@text='Número do CPF/CNPJ']`).setValue("11230470735");
//     await $(`//android.widget.TextView[@text="ENTRAR"]`).waitForDisplayed();
//     await $(`//android.widget.TextView[@text="ENTRAR"]`).click();
//     await $(`//android.widget.EditText[@resource-id="pin-password"]`).setValue("92121Aa!");
//     await $(`//android.widget.TextView[@text="PIX"]`).click();
//     await $('//android.widget.TextView[@text="Depositar"]').click();
//     await $(`//android.widget.EditText[@resource-id="amount-input"]`).setValue("1,00");
//     await $(`//android.widget.TextView[@text="CONTINUAR"]`).click();
//     await $(`//android.widget.TextView[@text="CRIAR CÓDIGO"]`).click();
//     await $('//android.widget.TextView[@text="Depositar com PIX"]').waitForDisplayed({ timeout: 5000 });
//     console.log('O elemento de Cobrança está visível? ', $('[@text="Depositar com PIX"]').isDisplayed());

//   });

// });