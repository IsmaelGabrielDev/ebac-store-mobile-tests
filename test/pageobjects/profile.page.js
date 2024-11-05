import { $ } from '@wdio/globals'

class ProfilePage {
    async profileName (name){
        return await $(`//android.widget.TextView[@text="${name}"]`)  
    }
}

export default new ProfilePage();
