import {test} from '../helpers/fixture/index';
export class ProductPage {
    constructor(page){
        this.page = page; 
        /*this.currencyDropDown = page.locator('#ec_currency_conversion');
        this.currencyDropDownSelect = page.locator('option:nth-child(2)');*/
        this.currencyDropDown = page.locator('#ec_currency_conversion').selectOption('EUR');
        this.singInButton = page.getByRole('button', { name: 'SIGN IN' });
        this.bugReportPopup = page.getByRole('heading', { name: 'You found a crash bug, examine the page by clicking on any button for 5 seconds.' });
        this.cookie = page.getByRole('button', { name: 'Functional only' });
        this.bugReportQuestion = page.getByRole('heading', { name: 'What did you find out?' });
    };

   async clickOnCurrency() {
    return test.step('Меняем валюту', async () => {
        await this.currencyDropDown.click();
    })
   };

   async clickChangeCurrency() {
    return test.step('Меняем валюту', async () => {
        await this.currencyDropDownSelect.click();
    })
   };

   async clickOnSingInBug() {
    return test.step('Кликаем на кнопку Sing In', async () => {
        await this.cookie.click();
        await this.singInButton.click();
    })
   };

}