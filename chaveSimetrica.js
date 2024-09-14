import {createCipheriv, randomBytes, createDecipheriv} from 'crypto'

const mensagem = 'ara ara'
const chave = randomBytes(32)
const vetorInicializacao = randomBytes(16)

const cifra = createCipheriv('aes256', chave, vetorInicializacao)

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex')

console.log(mensagemCifrada)

// transmissão ----------- chave, vetorInicialização, mensagem

// decifrar a mensagem
const decifra = createDecipheriv('aes256', chave, vetorInicializacao)

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8')

console.log(mensagemDecifrada.toString('utf-8'))