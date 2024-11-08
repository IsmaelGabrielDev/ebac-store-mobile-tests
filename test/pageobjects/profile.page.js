import { $ } from '@wdio/globals'

class ProfilePage {
    async profileName (name){
        return await $(`android=new UiSelector().text("${name}")`)  
    }
}

export default new ProfilePage();
