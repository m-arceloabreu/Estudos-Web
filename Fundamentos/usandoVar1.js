{
    {
        {
            var sera = 'Será??'
        }
    }
}
console.log(sera)           // a Variavel var fica visivel mesmo tendo sido declarada dentro de um bloco


function teste() {      // Porém, se o VAR estiver dentro da função, eu só consigo imprimir ele dentro da função
    var local = 123
    console.log(local)
}

teste()


// Var só tem dois Escopos: global ou em função  FUGIR COM ESCOPO GLOBAL