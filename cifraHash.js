import {createHash} from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash('ara ara'))

class Usurario {
    constructor(nome, senha){
        this.nome = nome,
        this.hash = criaHash(senha)
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log('Usuario autenticado com sucesso')
            return true
        }

        console.log('Usuario ou senha incorreto')
        return false
    }
}

const usuarioTeste = new Usurario('rangiku', 'BigSlutAraAra')

// caso correto
usuarioTeste.autentica('rangiku', 'BigSlutAraAra')

// caso incorreto
usuarioTeste.autentica('rangiko', 'BigSlutAraArY')
