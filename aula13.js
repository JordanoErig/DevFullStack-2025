// Recursividade: uma função que chama ela mesma.

// function fatorial(n){
//     if (n === 0){
//         return 1
//     } else {
//         return n * fatorial(n - 1)
//     }
// }

// console.log(fatorial(5))


// #### Soma dos números de 1 até N ####

// function somar(n){
//     if (n === 1){
//         return 1
//     } else {
//         return n + somar(n-1)
//     }

// }

// console.log(somar(5))

// #### Fibonacci

//   

// function fibo(n){
//     if (n === 0){
//         return 0
//     } else if (n === 1){
//         return 1
//     } else {
//         return fibo(n-1) + fibo(n-2)
//     }
// }

// console.log(fibo(8))

let categorias = [
    {
        id:1,
        nome: "Eletrônicos",
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id: 4, nome: "Tablets", filhos: []},
            ]}
        ]
    },
    {
        id:5,
        nome: "Louças",
        filhos: []

    }
]

function imprimirCategorias(lista, nivel = 0){
    for(let categoria of lista){
        console.log(" ".repeat(nivel * 2) + categoria.nome)
        if(categoria.filhos.length > 0){
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
}
imprimirCategorias(categorias)