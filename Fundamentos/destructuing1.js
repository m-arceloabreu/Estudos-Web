// NOVO RECURSO ES 2015    tirar uma informação de dentro de um array ou objeto

const pessoa = {
    nome: 'Ana',
    idade:'5',
    endereco:{
        logradouro:'Rua ABC',
        numero: 1000
    }
}
const {nome, idade} = pessoa                    //operador destructor: leia --> Tire o nome e idade do objeto pessoa
console.log(nome, idade)

const {nome: n, idade:i} = pessoa               //Mesma coisa, porém agora ele vai atribuir novas variaveis pra nome e pessoa
console.log(n,i)

const {endereco:{logradouro:l, numero: n1}} = pessoa

console.log(l,n1)