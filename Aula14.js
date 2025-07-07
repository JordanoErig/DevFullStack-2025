// let car = {
//     nome: "Mcqueen",
//     cor: "Vermelho"
// }

// console.log(car.nome)

// let car2 = {
//     nome: "Sally",
//     cor: "Azul"
// }

// console.log(car2.nome)

// class carExemplo {
//     construcor(nome,cor){
//         this.nome = nome
//         this.cor  = cor
//     }
// }

// let car3 = new carExemplo("Camaro", "Amarelo")
// console.log(car3)

class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

class LinkedList {
    construcor(){
        this.head = null
    }

    inserirInicio(v){
        let novo = new Node(v)
        novo.proximo = this.head
        this.head = novo
    }

    imprimir(){
        let atual = this.head
        let str = " "
        while(atual){
            str += atual.valor + "-->"
            atual = atual.proximo
        }
        str += 'null'
        console.log(str)
    }
}

let lista = new LinkedList()

lista.inserirInicio(10)
lista.inserirInicio(9)

lista.imprimir()