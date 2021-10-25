var atravessaRua = (posicaoAtual, destino, valorPassos) => {
	var passos = 0
	var i = posicaoAtual
	while (i < destino) {
		++passos
		i += valorPassos
	}
	return `A quantidade de passos dados será ${passos}`
} // While

console.log(atravessaRua(5, 10, 2))

var atravessaRua = (posicaoAtual, destino, valorPassos) => {
	var passos = 0
	for (var i = posicaoAtual; i < destino; i += valorPassos) {
		++passos
	}
	return `A quantidade de passos dados será ${passos}`
} // for

console.log(atravessaRua(500, 1000, 20))
