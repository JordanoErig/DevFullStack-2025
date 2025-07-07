// let nome = 'Julio César'

// console.log(nome.length)
// console.log(nome.charAt(0))
// console.log(nome.indexOf('C'))


// console.log(nome.replace('Julio', 'Cleyton'))
// console.log(nome.substr(6, 5))
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log("    Wesley".trim())

// ### Façam uma função que inverta uma string.#####

// function InverterString(str){
//     let reversed = ''

//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(InverterString('Jordano'))


// function InverterString(str){
//     return str.split('').reverse().join('')
// }
// console.log(InverterString('Olá, mundo!'))


//Encontrem o número de vogais de uma String
// function countVogais(str){
//     let vogais = str.match(/[!aeiou]/gi)
//     return vogais ? vogais.length : 0
// }

// console.log(countVogais('Jordano'))

// console.log(Math.ceil(100.2))   // ### ARREDONDA PARA CIMA
// console.log(Math.floor(100.2)) // ### ARREDONDA PARA BAIXO
// console.log(Math.round(100.2)) // ### INTEIRO MAIS PRÓXIMO

// console.log(Math.sqrt(81)) // ### VERIFICA RAIZ QUADRADA
// console.log(Math.cbrt(81)) // ### VERIFICA A RAIZ CUBICA
// console.log(Math.pow(9, 2)) // ## POTÊNCIA, 9 ELEVADO NA SEGUNDA POTÊNCIA

// console.log(Math.abs(-100.2)) // ## NÚMERO ABSOLUTO
// console.log(Math.random()) // ## Math.random geram um número aleatório entre 0 e 1
// console.log(Math.random() * 100) // ## Se quiser um número específico tem que declarar * número desejadodo


// function numeroAleatorio(min, max){
//    return Math.floor(Math.random() * (max - min + 1)) + min
// }
// console.log(numeroAleatorio(1,3))

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.toString())

// let date1 = new Date(2015, 7, 7)
// let date2 = new Date(2025, 7, 7)

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())
// console.log(milissegundosEntreDatas)

// let millesegundosPorDia = (1 * 24 * 60 * 60 * 1000)
// console.log('A diferença entre datas é de: ' + milissegundosEntreDatas/millesegundosPorDia + ' dias')

// ### FORMATAR UMA DATA ####
let date1 = new Date(2015, 7, 7)

function formatDate(date){
    let day = date.getDate().toString().padStart
    (2, '0')
    let month = (date.getMonth() + 1).toString().padStart(2, '0')
    let year = date.getFullYear().toString()

    return day + '/' + month + '/' + year
}

console.log(formatDate(date1))

// ### a soma de duas matrizes ###

