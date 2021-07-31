const escola = "Cod3r"
console.log(escola.charAt(4))    //Pega a letra que esta na posição 4
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))   //Pega a letra que esta na posição 3 porém na tabela UNICODE

console.log(escola.indexOf('d'))   //Mostra a posição que esta a letra que pedi

console.log(escola.substring(1)) // Começa a ler sem contar o indice 0

console.log(escola.substring(0,3))  //começa em 0 e e da 3 caracteres

console.log('Escola '.concat(escola).concat('!'))  //concatenar as coisas
console.log ('Escola ' + escola + "!")   //concatenar tbm

console.log ('Escola '.concat( escola.replace(3,'e')))  //comando replace substitui um pelo outro

console.log ('Ana, Maria, Pedro'.split(','))           //substituir uma string com virgulas pra array

