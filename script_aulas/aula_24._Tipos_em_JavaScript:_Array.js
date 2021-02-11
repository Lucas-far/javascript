

// Módulo: aula_24._Tipos_em_JavaScript:_Array.js
// Aparição: 24. Tipos em JavaScript: Array

const notas_alunos = [9.1, 7.4, 8.2, 7] // 0, 1, 2, 3... (contagem de índice do 0)

console.log(notas_alunos[0])
console.log(notas_alunos[4]) // undefined

notas_alunos[3] = 5          // alteração de um dado
console.log(notas_alunos)
notas_alunos[4] = 0          // adição de índice (previamente = undefined)
console.log(notas_alunos)
notas_alunos[10] = 5.5       // índice inexistente com + de 1 índice de diferença, gera <empty items>
console.log(notas_alunos)
