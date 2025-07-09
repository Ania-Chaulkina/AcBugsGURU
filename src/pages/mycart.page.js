import {test} from '../helpers/fixture/index';
export class MyCartPage {
    constructor(page){
        this.page = page;
        this.deleteCart = page.locator('#ec_cartitem_delete_1997978');
        this.singInBottonCart = page.getByRole('button', { name: 'SIGN IN' });
        this.bugReportQuestion = page.getByRole('heading', { name: 'What did you find out?' });
        this.bugReportPopup = page.getByRole('heading', { name: 'You found a crash bug, examine the page by clicking on any button for 5 seconds.' });
    };

   async clickOnSingInBug() {
    return test.step('Находим расположенное не по центру название кнопки Sing In', async () => {
        await this.singInBottonCart.click();
    })
   };
}