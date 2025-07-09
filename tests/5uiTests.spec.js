import {test} from '../src/helpers/fixture/index';
import { expect } from '@playwright/test';

test.describe('5 UI тестов на поиск ошибок', async () => {

    test('Отображение определенного количества товаров на странице', async ({appMain}) =>{
        await appMain.main.clickOnSortPerpage(appMain);
        await expect (appMain.main.bugReportPopup).toBeVisible()
        
    });

    test.only('Меняем валюту', async ({appProduct}) => {
        await appProduct.product.clickOnCurrency(appProduct);
        //await appProduct.product.clickChangeCurrency(appProduct);
        await expect (appProduct.product.BugReportPopup).toBeVisible();

    });

    test('Расположение кнопки Sing In на странице продукта', async ({appProduct}) => {
        await appProduct.product.clickOnSingInBug(appProduct)
        await expect (appProduct.product.bugReportPopup).toBeVisible();

    });

    test('Переход в корзину после добавления товара', async ({appMain}) => {
        await appMain.main.clickOnViewCart(appMain);
        await expect (appMain.main.bugReportPopup).toBeVisible()

    });

    test('Расположение названия поля Password', async ({appAccount}) => {
        await appAccount.account.clickPasswordBug(appAccount);
        await expect (appAccount.account.bugReportQuestion).toBeVisible()

    });

});
