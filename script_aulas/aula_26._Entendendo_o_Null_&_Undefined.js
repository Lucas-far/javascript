

// Módulo: aula_26._Entendendo_o_Null_&_Undefined.js
// Aula: 26. Entendendo o Null & Undefined

let dados = {nome: 'Carlos'} // ao declarar uma variável, é criado um endereço de memória para ela
console.log('dados = ', dados)
let dados2 = dados // esse tipo de declaração faz com que variáveis de nomes != ocupem o mesmo endereço 
console.log('dados2 = ', dados2)
dados2.nome = 'Alfredo' // qualquer uma delas que sofrer alteração, afeta a outra também
console.log('dados2 = ', dados2)
console.log('dados = ', dados)

// O lógica aplicada acima não funciona para classe [ number ]
let numero = 0
let numero2 = numero
console.log('numero2 = ', numero2)
numero2++
console.log('numero2 = ', numero2)
console.log('numero = ', numero)