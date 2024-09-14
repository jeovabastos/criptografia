import {scryptSync, randomBytes, timingSafeEqual} from 'crypto'

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex')

    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex')

    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha){
        this.nome = nome,
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }

    autentica(nome, senha){
        if(nome === this.nome){
            const testHash = scryptSync(senha, this.sal, 64)
            const hashReal = Buffer.from(this.hash, 'hex')

            const hashesCorrespondem = timingSafeEqual(testHash, hashReal)

            if(hashesCorrespondem){
                console.log('Usuario autenticado com sucesso')
                
                return true
            }
        }

        console.log('Ususario nao autenticado')
        return false
    }
}

const usuarioTeste = new Usuario('Rukya', 'DLC666')

console.log(usuarioTeste)

// Caso correto
usuarioTeste.autentica('Rukya', 'DLC666')

// Caso incorreto
usuarioTeste.autentica('RukyR', 'DLC669')