// 1. Crie uma classe cifra de substituição que recebe 2 alfabetos e substitui um
// caractere de um alfabeto por um caractere do alfabeto alternativo, contendo 2
// métodos: encode(codificação) e decode(decodificação) onde a posição de cada
// caractere em um alfabeto é mapeada para o alfabeto alternativo para codificação ou
// decodificação.
// Se um caractere fornecido não estiver no alfabeto oposto, deixe como está.

class cifraSubstituicao {
    Alfabeto1: string
    Alfabeto2: string
    constructor(alfabeto1: string, alfabeto2: string) {
        this.Alfabeto1 = alfabeto1
        this.Alfabeto2 = alfabeto2
    }
    Encode(letras: string) {
        let arrayLetras1 = this.Alfabeto1.split("")
        let arrayLetras2 = this.Alfabeto2.split("")
        let arrayParametro = letras.split("")
        let arraySup: string[] = []
        for (let index = 0; index < arrayLetras1.length; index++) {
            for (let index2 = 0; index2 < arrayLetras1.length; index2++) {
                if (arrayParametro[index] == arrayLetras1[index2]) {
                    arraySup.push(arrayLetras2[index2])
                }
            }
        }
        let juntar = arraySup.join("")
        return juntar
    }
    Decode(letras: string) {
        let arrayLetras1 = this.Alfabeto1.split("")
        let arrayLetras2 = this.Alfabeto2.split("")
        let arrayParametro = letras.split("")
        let arraySup: string[] = []
        for (let index = 0; index < arrayLetras1.length; index++) {
            for (let index2 = 0; index2 < arrayLetras1.length; index2++) {
                if (arrayParametro[index] == arrayLetras2[index2]) {
                    arraySup.push(arrayLetras1[index2])
                }
            }
        }
        let juntar = arraySup.join("")
        return juntar
    }
}

let cifra = new cifraSubstituicao("abcdefg", "hijklmn")


// 2. Crie uma classe Jarra de suco com as seguintes propriedades: sucos(suco[]),
// quantidadeTotal (number) e concentrações (number[]). Crie também uma classe Suco
// com as seguintes propriedades: sabor(string) e quantidade(number). Na jarra
// podemos adicionar alguns sucos com determinadas quantidades. Às vezes
// despejamos um pouco do nosso suco. Então queremos descobrir quais são as
// concentrações do nosso suco de fruta.
// Exemplo:

// ● Você pega uma jarra vazia para o seu suco
// ● Sempre que a jarra está vazia, as concentrações são sempre 0
// ● Agora você adiciona 200 ml de suco de maçã
// ● E então você adiciona 200 ml de suco de banana
// ● Agora a concentração de suco de maçã é de 0,5 (50%)
// ● Então você despeja 200 ml da jarra
// ● A concentração de suco de maçã ainda é de 50%
// ● Então você adiciona 200 ml de suco de maçã novamente
// ● Agora a concentração de suco de maçã é 0,75, enquanto a concentração de
// suco de banana é de apenas 0,25 (300 ml de suco de maçã + 100 ml de suco de
// banana)

class Suco {
    Sabor: string
    Quantidade: number
    constructor(sabor: string, quantidade: number) {
        this.Sabor = sabor
        this.Quantidade = quantidade
    }
}

function CriarSuco() {
    let sucoSabor = prompt("Insira o sabor do suco")
    let sucoQuantidade = parseInt(prompt("Insira a quantidade do suco em ML"))
    let suco1 = new Suco(sucoSabor, sucoQuantidade)
    return suco1
}

class JarraDeSuco {
    Sucos: Suco[] = []
    QuantidadeTotal: number = 0
    Concentracoes: number[] = []
    AdicionarSuco(suco: Suco) {
        if (this.Sucos.length == 0) {
            this.Sucos.push(suco)
        } else {
            for (let index = 0; index < this.Sucos.length; index++) {
                if (suco == this.Sucos[index]) {
                    this.Sucos[index].Quantidade + suco.Quantidade
                } else if (index == this.Sucos.length - 1) {
                    this.Sucos.push(suco)
                }
            }
        }
        this.QuantidadeTotal = this.QuantidadeTotal + suco.Quantidade
        for (let index = 0; index < this.Sucos.length; index++) {
            let concentracao = (this.Sucos[index].Quantidade / this.QuantidadeTotal) * 100
            let ponto = concentracao.toFixed()
            this.Concentracoes[index] = parseInt(ponto)
        }
        console.log("Suco adicionado!")
    }
    Despejar(quantidade: number) {
        let quantidadeTotal2 = this.QuantidadeTotal - quantidade
        this.QuantidadeTotal = quantidadeTotal2
        console.log("Foi despejado da jarra " + quantidade + "ml")
    }
}

// let jarra1 = new JarraDeSuco()

// let continuar = true
// while (continuar) {
//     let opcao = prompt("Insira a opção desejada: Adicionar suco na jarra(1), Desepejar suco(2)")
//     switch (opcao) {
//         case "1":
//             jarra1.AdicionarSuco(CriarSuco())
//             break;
//         case "2":
//             let DespejarQdade = parseInt(prompt("Insira a quantidade que deseja despejar"))
//             jarra1.Despejar(DespejarQdade)
//             break;
//         default:
//             console.log("Opção inválida")
//             break;
//     }
//     let novamente = prompt("Deseja continuar executando? s ou n")
//     if (novamente != "s") {
//         continuar = false
//     }
// }
