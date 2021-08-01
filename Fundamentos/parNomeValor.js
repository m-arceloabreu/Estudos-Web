const saudacao = 'Opa'  // contexto lexico 1

function exec() {
    const saudacao = 'Faaaaala'  // contexto lexico 2
    return saudacao         // v ai retornar faaaaala
}

//Objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)