import { createHash } from 'crypto'

function criaHash(dado, estrategia){
    return createHash(estrategia).update(dado).digest('hex')
}

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

const rainbowTable = senhasComuns.map(senha => {
    return [senha, criaHash(senha, 'sha256')]
})

console.log(rainbowTable)

const hashesVazadas = [
    '55a5e9e78207b4df8699d60886far70079463547b095a1a05bc719bb4e6cd281',
    '55a5e9e78207b4df8699d60886fae70079463547b095g1a05bc719bb4e6cd2u1',
    '55a5e9e78207b4df8699d60886fa070079463547b095h1a05bc719bb4e6cd2s1',
    '55a5e9e78207b4df8699d60886fa070079463547b095d1a05bc719bb4e6cd251'
]

hashesVazadas.map(hashVazada =>{
    rainbowTable.map(parGerado=>{
        if(hashVazada === parGerado[1]){
            console.log(`Senha encontrada, a hash ${hashVazada} equivale a senha ${parGerado[0]}`)
        }
    })
})