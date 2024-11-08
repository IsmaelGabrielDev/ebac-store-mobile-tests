import { $ } from '@wdio/globals'

class HomePage {
    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
    }
    async opensingUp(){
        await $('android=new UiSelector().text("Sign up")').click()
    }
    async openWishlist(){
        await $('id:wishlist').click()
    }
    async clickSeta(){
        await $('android=new UiSelector().text("")').click()
    }
}

export default new HomePage();
