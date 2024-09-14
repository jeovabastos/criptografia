function msg(message, steps){
	const cifredMessage = message.split('').map(char =>{
		const newChar = char.charCodeAt(0)

		return String.fromCharCode(newChar + steps)
})
	
	return cifredMessage.join('')
}

const mensagemCifrada = msg('acreanosama', 3)
console.log('encriptada: ', mensagemCifrada)

function decryptMsg(message, steps){
	const cifredMessage = message.split('').map(char =>{
		const newChar = char.charCodeAt(0)

		return String.fromCharCode(newChar - steps)
})
	
	return cifredMessage.join('')
}

const mensagemDecifrada = decryptMsg(mensagemCifrada, 3)
console.log('decifrada: ', mensagemDecifrada)

