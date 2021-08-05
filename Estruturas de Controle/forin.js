const cliente = {
    nome:'Marcelo',
    idade: 23,
    peso: 85
}

for (let atributo in cliente){
    console.log(`${atributo} = ${cliente[atributo]}`)
}