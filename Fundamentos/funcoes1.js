// função sem retorno em JS

    function imprimirSoma(a, b){
        console.log(a+b)
    }

    imprimirSoma(2,3)

    //função com retorno

    function soma (a, b=0){  // b é um parametro entao se eu nao colocar o valor dele no console.log abaixo ele vai considerar o 0
        return a + b
    }
    console.log(soma(2,3))
    console.log(soma(2))    //  Ver o Comentario de cima
    