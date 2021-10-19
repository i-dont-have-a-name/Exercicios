const AnalizarNum = (valores) => {
	let quantidade = valores.length

	let soma = valores.reduce( (a, b) => a + b)

	let menorVal = valores.sort( (a, b) => a - b)[0]
	
	let maiorVal = valores.sort( (a, b) => a - b).reverse()[0]

	let media = soma / quantidade

	return `Quantidade: ${quantidade}\nSoma: ${soma}\nMenor: ${menorVal}\nMaior: ${maiorVal}\nMédia: ${media}`
}

console.log(AnalizarNum([5, 9, 4]))
