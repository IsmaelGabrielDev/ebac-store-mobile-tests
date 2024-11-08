import { $ } from '@wdio/globals'

class CadastroPage {
    get firstname() { 
        return $('id:firstName')
    }

    get lastname() { 
        return $('id:lastName')
    }

    get number() { 
        return $('id:phone')
    }

    get email() { 
        return $('id:email')
    }

    get password() { 
        return $('id:password')
    }

    get confirmPassword() { 
        return $('id:repassword')
    }

    get btnSubmit() { 
        return $('id:create')
    }

    async preCadastro(nome, sobrenome, numero, email, senha, confirmarSenha) {

        await this.firstname.setValue(nome)
        await this.lastname.setValue(sobrenome)
        await this.number.setValue(numero)
        await this.email.setValue(email)
        await this.password.setValue(senha)
        await this.confirmPassword.setValue(confirmarSenha)
        await this.btnSubmit.click()
    }

}

export default new CadastroPage();