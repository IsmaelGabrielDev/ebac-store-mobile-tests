import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import CadastroPage from '../pageobjects/cadastro.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Cadastred application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await homePage.opensingUp()
        await CadastroPage.preCadastro('Ismael', ' Gabriel', '18 992332555', 'ismaelg.qa15@ebac.art.br', 'Ismael123*', 'Ismael123*')
        await homePage.openWishlist()
        await homePage.clickSeta()
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('Gabriel Ismael')).isDisplayed()).toBeTruthy()
    })
})