import {test} from '../helpers/fixture/index';
export class MyCartPage {
    constructor(page){
        this.page = page;
        //this.grandTotal = page.locator('#ec_cart_total', {name:'152.99'}).getByRole('generic');
        this.singInBottonCart = page.getByRole('button', { name: 'SIGN IN' });
        this.bugReportPopup = page.getByRole('heading', { name: 'You found a crash bug, examine the page by clicking on any button for 5 seconds.' });
    };

   async clickOnSingInBug() {
    return test.step('Находим расположенное не по центру название кнопки Sing In', async () => {
        await this.singInBottonCart.click();
    })
   };
}