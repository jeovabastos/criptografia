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

const usuarioTeste = new Usurario('rangiku', 'senha123')

const senhasComuns = [
    'ara ara',
    'bigBooba',
    'senha',
    'password',
    'lordOfpussy',
    'ara 123',
    'big 666',
    'senha123'
]

senhasComuns.map(senha=>{
    if(usuarioTeste.autentica('rangiku', senha)){
        console.log(`A senha do usuario é ${senha}`)
    }
})