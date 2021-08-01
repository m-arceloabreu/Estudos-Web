// Armazenando função dentro de uma variavel

const imprimirSoma = function (a,b){        //a função dentro da constante nao tem nome
    console.log (a + b)
}
imprimirSoma(2,3)


//Armazenando uma função arrow em uma variavel

const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))


//retorno implicito

const subtracao = (a, b) => a-b

console.log(subtracao(5,3))


const imprimir = a => console.log(a)

imprimir('legal!!')