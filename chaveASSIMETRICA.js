import {generateKeyPairSync} from 'crypto'

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

// console.log(publicKey)
// console.log(privateKey)

import { publicEncrypt, privateDecrypt } from 'crypto'

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from('yametee kudasai'))
console.log(dadosCriptografados.toString('hex'))

// transmissão

const dadosDecifrados = privateDecrypt(privateKey, dadosCriptografados)
console.log(dadosDecifrados.toString('utf-8'))