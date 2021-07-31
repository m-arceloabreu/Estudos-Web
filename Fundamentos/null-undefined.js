let valor 
console.log(valor)      // nao tem nada atribuido portanto undefined

valor = null    //null nao tem nenhum endereço pra local de memoria "null = ausencia de valor"
console.log(valor)

const produto = {}

console.log(produto.preco)    //vai dar undefined pois preco nao tem nada atribuido

produto.preco = 3.50

console.log(produto)


produto.preco = null     //sem preco
console.log (produto)