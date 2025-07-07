// console.log("Hellow World");
// console.log('Hellow World');

// console.log("A gíria 'Mané' é muito utilizada no RJ")
// console.log(`Jordano`)

// console.log(typeof("Olá, mundo!"))
// console.log(typeof(1.5))
// console.log(1.5)

// // usando let
// let name = 'Jordano'
// console.log(name)

// //usando var
// var anotherName = 'Vitor'
// console.log(anotherName)

// // não pode ter o valor alterado
// const CITY = "Alagoas"

// let test
// console.log(test)
// test = 'teste'
// console.log(test)


// let num1 = 5
// let num2 = 3

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 ** num2)
// console.log(num1 % num2)

// let num = '10'
// console.log(parseInt(num) + 10)

//let counter = 1;
// counter = counter + 1;
// counter += 1;
// counter++ -> pós incremento 
// ++counter -> pré incremento
//console.log(++counter)
// console.log(counter++)
// console.log(counter)

// let step = 12
// counter += step
// console.log(counter)
// counter += step
// counter += step
// counter += step
// counter += step
// console.log(counter)
// counter += step

// console.log(counter)

// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 <= 5)
// console.log(10 >= 5)
// console.log(10 == 5)
// console.log(10 == 10)
// console.log('10' == 10)
// console.log('10' === 10)
// console.log('10' != 10)
// console.log(10 !== '10')

// console.log((10 < 5) && (10 > 2))
// console.log((10 < 5) && !(10 > 2))
// console.log((10 > 2) || (10 < 5))
// console.log(!(10 > 2) || (10 < 5))

// let usuario = 'jordano'
// let senha = '1234'

// let autenticacao = usuario === 'jordano' && senha === '1234'
// console.log(autenticacao)

// const nota = 95
// if (nota < 60){
//     console.log('reprovado')
// } else if (nota > 90) {
//     console.log('Bichão mesmo')
// } else {
//     console.log('aprovado')
// }

//(nota < 60) ? console.log('reprovado') : console.log('aprovado')

// VERIFICAR SEM UM NÚMERO É PAR OU ÍMPAR

// let number = 13

// if(number % 2 == 0){
//     console.log('Par')
// } else {
//     console.log('Ímpar')
// }

// O MAIOR NÚMERO ENTRE OS 3

// let num1 = 8
// let num2 = 5
// let num3 = 3

// if((num1 > num2) && (num1 > num3)){
//     console.log("O num1 é o maior entre os números")
// } else if ((num2 > num1) && (num2 > num3)){
//     console.log("O num2 é o maior entre os números")
// } else if ((num3 > num1) && (num3 > num2)) {
//     console.log('O num3 é o maior entre os números')
// } else {
//     console.log('Os números são iguais ou há empate entre dois ou mais números')
// }

// const prompt = require('prompt-sync')()

// let valor1 = Number(prompt("Insira o primeiro valor: "))
// let valor2 = Number(prompt("Insira o segundo valor: "))
// let op = prompt('Informe a operação desejada: (+, -, /, *): ')
// let resultado = 0

// if (op === '+'){
//     resultado = valor1 + valor2
// } else if (op === '-'){
//     resultado = valor1 - valor2
// } else if (op === '*'){
//     resultado = valor1 * valor2
// } else if (op === '/'){
//     if(valor2 !== 0){
//     resultado = valor1 / valor2
//     } else {
//         console.log('Erro, divisão por zero')
//         resultado = undefined
//     }
// } else {
//     console.log('Operação inválida')
//     resultado = undefined
// }

// if(resultado !== undefined){
//     console.log('Resultado: ', resultado)
// }

// let opcao = 'opcao1'

// switch(opcao){
//     case (opcao != 'opcao2'):
//         console.log('Você selecionou a primeira opção')
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção')
//         break
//     default:
//         console.log('Você não escolheu nenhuma opção válida!')
//         break
// }

// // mesma coisa feita com o switch case

// let opcao2 = 5
// if (opcao2 == 1){
//     console.log("vc escolheu a primeira opção.")
// } else if (opcao == 2){
//     console.log('vc escolheu a segunda opcao')
// } else {
//     console.log('nenhuma das opções são válidas')
// }

// const prompt = require('prompt-sync')()

// // let valor1 = Number(prompt("Insira o primeiro valor: "))
// // let valor2 = Number(prompt("Insira o segundo valor: "))
// // let op = prompt('Informe a operação desejada: (+, -, /, *): ')

// // para debugar é melhor quando os valores já estão inseridos
// let valor1 = 10
// let valor2 = 2
// let op = '/'
// let resultado = 0

// switch(op){
//     case (op === '+'):
//         resultado = (valor1 + valor2)
//     break
//     case (op === '-'):
//         resultado = (valor1 - valor2)
//     break
//     case (op === '*'):
//         resultado = (valor1 * valor2)
//     break
//     case '/':
//         if (valor2 === 0){
//             console.log("erro, divisão por zero")
//             resultado = undefined
//         } else {
//         resultado = valor1 / valor2 }
//     break
//     default:
//         console.log('Operação inválida')
//         resultado = undefined
//         break
// } 
// if (resultado !== undefined){
//     console.log('Resultado: ', resultado)
// }

// Exercício 2: verificar se um número é positivo, negativo ou zero

// let valor1 = 0

// if (valor1 > 0){
//     console.log('Valor1 é um numero positivo! Número: ' + valor1)
// } else if (valor1 < 0){
//     console.log('Valor1 é um número negativo! Número: ' + valor1)
// } else {
//     console.log('Valor1 é igual a zero!')
// }



// Exercício 3: verifiar é bissexto

let ano = 2029
if (ano % 4 == 0){
    console.log('O ano é bissexto!')
} else {
    console.log('O ano não é bissexto!')
}

// Exercício 4: definam faixas etárias para crianças, adultos e idosos

// let idade = 18

// if ((idade > 0) && (idade < 18)){
//     console.log('Baseado na idade informada, vc é uma criança!')
// } else if ((idade >= 18) && (idade < 60)){
//     console.log('Baseado na idade informada, vc é um adulto!')
// } else{
//     console.log("Baseado na idade informada, vc é um adulto!")
// }