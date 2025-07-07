// let livraria = [
//     {titulo: "1984", autor: "George Orwell", ano: 1984},
//     {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
//     {titulo: "Código limpo", autor: "Martin", ano: 2010},
//     {titulo: "O Velho e o Mar", auotor: "Hemmingway", ano: 1910},
//     {titulo: "O Príncipe", auotor: "Maquiável", ano: 2002},
// ]

// // For Of para iterar e verificar os livros publicados antes do ano 2000.

// for (let antes of livraria){
//     if (antes.ano < 2000){
//         console.log(antes)
//     }
// }

// let filmes = [
//     {titulo: "Sempre ao seu lado", genero: "De chorar"},
//     {titulo: "Massacre da Serra Elétrica", genero: "Terror"},
//     {titulo: "Minha mãe é uma peça", genero: "Comédia"},
//     {titulo: "Tarzan", genero: "Aventura"},
//     {titulo: "Como Eu Era Antes de Você", genero: "De chorar"},
//     {titulo: "Jogo da Imitação", genero: "Histórico"},
//     {titulo: "Top Gun", genero: "Guerra"},
//     {titulo: "Your Name", genero: "Romance"},
//     {titulo: "Deadpool", genero: "Herói"},
//     {titulo: "Batman Forever", genero: "Herói"},
// ]

// // Listem a contagem de gêneros desses filmes.
// let contagemFilmes = {}

// filmes.forEach((filme) => {
//     if (contagemFilmes[filme.genero]){
//     contagemFilmes[filme.genero]++
//     } else {
//         contagemFilmes[filme.genero] = 1
//     }
// })

// console.table(contagemFilmes)

// for (let genero in contagemFilmes){
//     console.log(`Estão presentes na lista ${contagemFilmes[genero]} filmes do gênero ${genero}`)
// }



// ####Construam uma função que calcule o fatorial de um número####

// function fatorial(numero){
//     let fatorial = 1
//     for (let i = 1; i <= numero; i++){
//         fatorial = fatorial * i
//     }
//     console.log(fatorial)
// }

// fatorial(5)


// ### Imprimir os primeiros 10 números da sequência de Fibonacci ###

// function fibonacci (){
//     let a = 0, b = 1, temp
//     // console.log(a)
//     // console.log(b)

//     for(let i = 3; i <= 10; i++){
//         temp = a + b
//         console.log(temp)
//         a = b
//         b = temp
//     }
// }

// fibonacci()


// função de PA - Progressão Aritmética

function pa(primeiroTermo, razao){
    let soma = 0
    for (let i = 0; i < 10; i++){
    let termo = primeiroTermo + i * razao
    console.log(termo)
    soma += termo
    }
    console.log(`A soma dos termos é: ${soma}`)

}

pa(7,7)