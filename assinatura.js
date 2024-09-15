import {generateKeyPairSync, createSign, createVerify} from 'crypto'


const {privateKey, publicKey} = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
})

let dados = 'ara ara'

// ASSINATURA
const assinador = createSign('rsa-sha256')
assinador.update(dados)

const assinatura = assinador.sign(privateKey, 'hex')
console.log('assinatura: ', assinatura)

// INTERMEDIARIO
// dados += ' dados alterados pelo intermediario'

// ENVIO: documento, assinatura e chave publica
const verificador = createVerify('rsa-sha256')
verificador.update(dados)

const isVerified = verificador.verify(publicKey, assinatura, 'hex')
console.log('isVerified: ', isVerified) 