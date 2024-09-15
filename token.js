import jwt from 'jsonwebtoken'

const chaveSecreta = 'Ara Ara KamiSama'
const token = jwt.sign({
    nickname: 'DARKLORD666',
    level: "Usurpador"
}, chaveSecreta)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)
console.log(tokenDecodificado)