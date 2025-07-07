// let livro = {
//     nome: 'Marley e Eu',
//     anoLancamento: 2024,
//     autor: 'Will Stmith',
//     nrPaginas: 12,
//     genero: 'Comédia',
//     aotores: ['Scooby', 'Super Cão', 'Batcão'],

//     mostrarCaracteristicas: function(){
//         return `${this.nome} é um livro para ficar alegre.`
//     }
// }

// console.log(livro.mostrarCaracteristicas()) 

// let filme = {
//     titulo: 'High School Musical',
//     anoLancamento: 2007,
//     atores: ['Zac Efron', 'Arthur Morgnan', 'Cloud Strife'],
//     genero: 'Guerra',

//     mostrarCaracteristicas: function() {
//         return `${this.titulo} é um file de drama.`
//     }

// }

// console.log(filme.mostrarCaracteristicas())

// let jogadores = ['Kannemann', 'Wagner Leonardo', 'Cristaldo']

// for (let bonsDoGremio in jogadores){      // For in itera sobre chaves
//     console.log(jogadores[bonsDoGremio])
// }


// let reservas = 'Grêmio'

// for (let mausDoGremio of reservas){  // For of itera sobre valores, usado para elementos iteráveis: array de objeto
//     console.log(mausDoGremio)
// }

// ### Calculem as médias das notas dos alunos de um professor e digam se a turma do Professor está na média.####

let professor = {
    nome: 'Ermelindo',
    materia: 'Matemática',
    notas: {
        aluno1: [8, 6],
        aluno2: [5,6]
    }  
}

let somaNotas = 0
let numeroAlunos = 0

for (let aluno in professor.notas) {
    somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce
    ((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]

    numeroAlunos++
}

let media = somaNotas/numeroAlunos

if(media >= 6){
    console.log(`A média da turma é ${media} e está acima do padrão`)
} else {
    console.log(`A média da turma é ${media} e está abaixo do padrão`)
}
