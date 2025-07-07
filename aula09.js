// let listaCoisas = Array()
// listaCoisas['hardware'] = ['Placa de vídeo']
// listaCoisas['hardware'][1] = 'smartwatch'
// listaCoisas['games'] = ['GTA VI']
// listaCoisas['games'][1] = 'The Witcher' 

// console.table(listaCoisas)


// function RetornaParouÍmpar(valor){
//     let resultado
//     if(valor % 2 === 0){
//         resultado = 'PAR'
//     }else{
//         resultado = 'ÍMPAR'
//     }
//     return resultado
// }

// let resultado = RetornaParouÍmpar(8)
// console.log(resultado)

// function calcularArea(altura, largura){
//     return altura * largura
// }
// console.log(calcularArea(15,15))

/* #### FAÇA UMA FUNÇÃO QUE RETORNE
        UM ARRAY ORDENADO #### */

        // function ordenaArray(arr){
        //     return arr.sort((a, b) => a - b)
        // }
        // console.log(ordenaArray([8,5,7,2,1,-8]))

// function ExibirNome(nome){
//     console.log(nome)
// }

// ExibirNome('Jordano')

// let exibeNome = function(nome){
//     console.log(nome)
// }

// let exibeNome1 = (nome) => console.log(nome)
// exibeNome1('Vutor')

// // ##################

// let sucesso = () => console.log('Requisição foi um sucesso')

// let erro = function(){
//     console.log('Requisição deu errado')
// }

// function requisicao(sucesso, erro){
//     if(false){
//         sucesso()
//     } else {
//         erro()
//     }
// }
// requisicao(sucesso,erro)

/* ### Criar uma função que soma os 
elementos de um Array e retorna esse valor ####*/

// function SomaDeArray(arr){
//     let soma = 0
//     for(let i = 0; i < arr.length; i++ ){
//         soma += arr[i]
//     }
//     return soma
// }
// console.log(SomaDeArray([2,2,89]))


/* ### RETORNAR O MAIOR NÚMERO DE UM ARRAY ###*/

function maiorNumero(arr){
    let Maior = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > Maior){
            Maior = arr[i]
        }
    }
    console.log(Maior)
}

maiorNumero([5,8,6,50,10])
