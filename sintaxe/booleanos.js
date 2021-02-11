

// Módulo: booleanos.js
// Aparição: aula_23_Tipos_em_JavaScript:_Boolean.js
// Objetivo: converter dados para tipo [ booleano ]
// Objetivo2: ser usado em condições (será atualizado mais tarde)


// -------------------------------------- CONVERSÃO PARA BOOLEANO --------------------------------------
let nulo = 0
console.log([1], `A conversão do valor ${nulo} para booleano é = ${!!nulo}`) // conversão = 2 !!
nulo = 1
console.log([2], `A conversão do valor ${nulo} em booleano é = ${!!nulo}`)   // conversão = 2 !!
console.log([3], `A reversão do valor ${nulo} em booleano é = ${!nulo}`)     // reversão = 1 !

// -------------------------------------------- DADOS = true --------------------------------------------
console.log(
    `
    ${1} números positivos   = ${!!1}
    ${-2} números negativos  = ${!!2}
    ${' '} string com espaço = ${!!' '}
    ${[]} lista vazia        = ${!![]}
    ${{}} objeto vazio       = ${!!{}}
    ${Infinity} infinito     = ${!!Infinity}
    `
)

// ------------------------------------------- DADOS = false -------------------------------------------
console.log(
    `
    ${0} número zero       = ${!!0}
    ${''} string vazia     = ${!!''}
    ${null} null           = ${!!null}
    ${NaN} NaN             = ${!!NaN}
    ${undefined} undefined = ${!!undefined}
    `
)
