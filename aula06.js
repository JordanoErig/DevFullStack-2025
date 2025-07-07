const prompt = require("prompt-sync")()

// Escreva um algoritmo que leia uma temperatura em graus Celcius e devolva em Fahrenheit

// let graus = Number(prompt("Informe os graus celcius: "))

// let fah = (graus * 9 / 5) + 32

// console.log("Graus Celcius convertidos para Fahrenheit: " + fah + "°F")


/* Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos,
 nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores */

//  let eleitores = Number(prompt('Informe a quantidade de eleitores totais do município: '))
//  let votosBranco = Number(prompt('Informe a quantidade de votos brancos: '))
//  let votosNulos = Number(prompt('Informe a quantidade de votos nulos: '))
//  let votosValidos = Number(prompt('Informe a quantidade de votos válidos: '))

//  console.log('O total de eleitores do município é: ' + eleitores)
//  console.log('O percentual de votos em branco é: ' + (votosBranco / eleitores) * 100 + '%')
//  console.log('O percentual de votos nulos é: ' + (votosNulos / eleitores) * 100 + '%')
//  console.log('O percentual de votos válidos é: ' + (votosValidos / eleitores) * 100 + '%')

 /*A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos
 reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva; 

 a) O número de alunos reprovados na turma C.
 b) O número de alunos reprovados na turma D.
 c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.

 [Exemplo de dados de entrada]
 10 (percentual de alunos reprovados na turma C)
 85 (percentual de alunos aprovados na turma D)

 [Saída para os dados de entrada acima]
 6 (quantidade de alunos reprovados na turma C)
 3 (quantidade de alunos reprovados na turma D)
 11.25 (percentual de alunos reprovados em relação ao total de alunos das duas) */

/* let totalTurmaC = 60
 let totalTurmaD = 20
 let totalAlunos = totalTurmaC + totalTurmaD

 let reprovadosC = Number(prompt('Informe a porcentagem de alunos reprovados na Turma C: '))
 let conversaoC = (totalTurmaC * reprovadosC) / 100
 let aprovadosD = Number(prompt('Informe a porcentagem de alunos aprovados na Turma D: '))
 let conversaoD = ((100 - aprovadosD) * totalTurmaD) / 100
 let totalReprovados = ((conversaoC + conversaoD) / totalAlunos) * 100
 console.log('Total de alunos reprovados da Turma C: ' + conversaoC)
 console.log('Total de alunos reprovados da Turma D: ' + conversaoD)
 console.log(totalReprovados + '%  de reprovados do total das duas turmas') */


 /* Faça um programa que leia o dia da semana (Domingo, segunda, terça, quarta, Quinra, sexta, sábado).
 Esse dia deve ser um texo. Se for sábado ou domingo imprimir "Final de semana", se não imprimir "dia útil" */

//  let diaSemana = String(prompt("Informe o dia da semana: "))

//  if ((diaSemana == 'sábado') || (diaSemana == 'domingo')){
//     console.log('É final de semana!')
//  } else {
//     console.log('É dia útil!')
//  }


 /* Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0.
 Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição
 deve ser encerrada sem imprimir mensagem alguma */

//  let numero

// while (numero !== 0){
//     numero = Number(prompt("Informe um número: "))
// if (numero > 0){
//     console.log('Positivo!')
// } else if (numero < 0){
//     console.log('Negativo!')
// } 
// }


/* Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha
incorreta informada escrever a mensagem "SENHA INVÁLIDA". Quanto a senha for informada corretamente deve ser
impressa a mensage, "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807*/

let senha

do {
    senha = Number(prompt('Informe a senha: '))
    if (senha !== 2807){
    console.log('SENHA INVÁLIDA')
} else {
console.log('ACESSO PERMITIDO')
} 
} while(senha !== 2807)