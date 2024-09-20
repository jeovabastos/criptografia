import {createHash} from 'crypto'

class Usurario {
    constructor(nome, senha){
        this.nome = nome,
        this.hash = this.criaHash(senha)
    }
    
    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === this.criaHash(senha)){
            return true
        }

        return false
    }
}

const usuarioTeste = new Usurario('rangiku', '1337')

for(let senhaTest = 0; senhaTest < 10000; senhaTest++){
    if(usuarioTeste.autentica('rangiku', senhaTest.toString())){
        console.log(`A senha do usuario é ${senhaTest}`)
    }
}