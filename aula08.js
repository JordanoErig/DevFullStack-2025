/* Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha. Use métodos de array para calcular:
A soma de todos os elementos.
A média de todos os elementos.

Gere um novo array chamado pares que contenha apenas os números pares de números.
Imprima no console:
O array original 'numeros'
a soma
a média 
o array pares */

// ####SEM O USO DE MÉTODOS####

// let numeros = [1,2,3,4,5,6,7,8,9,10]
// let soma = 0
// let media = 0
// let pares = []

// for (let i = 0; i < numeros.length; i++){
//     soma += numeros[i]
//     if (numeros[i] % 2 === 0){
//     pares.push(numeros[i])
//     } 
// }
// media = soma / numeros.length
// console.log(soma)
// console.log(media)
// console.log(pares)


// ### COM O USO DE MÉTODOS ###

// let numeros = [1,2,3,4,5,6,7,8,9,10]
// let soma = numeros.reduce((acumulador, valor)=> acumulador + valor, 0)
// let pares = numeros.filter((num => num % 2 === 0))
// let media = soma / numeros.length
// console.log(soma)
// console.log(media)
// console.table(pares)


// ORDENE O ARRAY EM ORDEM DECRESENTE

// ### BUBLEESORT ###

// let numeros = [10,9,8,7,6,5,4,3,2,1,0]
// let n = numeros.length

// for(let i = 0; i < n; i++){
//     for (let j = 0; j < n - i; j++){
//         if(numeros[j] > numeros[j + 1]){
//             let temp = numeros[j]
//             numeros[j] = numeros[j + 1]
//             numeros[j + 1] = temp
//         }
//     }
// }

// console.table(numeros)


// ####COMO CONSTRUIR UMA MATRIZ####

// let matriz = []

// for (let i = 0; i < 3; i++){
//     matriz [i] = []

//     for(let j = 0; j < 3; j++){
//         matriz[i][j] = 10
//         let soma = i + j
//     if( i == j){
//         console.log(soma)
//     }
//     }
// }
// console.table(matriz)


// ### CALCULAR A DIAGONAL DA MATRIZ ###

let matriz = []
let soma = 0

for (let i = 0; i < 3; i++){
    matriz [i] = []

    for(let j = 0; j < 3; j++){
        matriz[i][j] = 10
        if (i == j){
        soma += matriz[i][j]
        console.log(soma)
    }
    }
}
console.table(matriz)
console.log(soma)














// let mercado = []
// mercado['fruteira'] = ['maca', 'abacate', 'pera']
// mercado['acougue'] = ['picanha', 'alcatra', 'file']

// console.table(mercado)
