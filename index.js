// 1. Crie uma classe cifra de substituição que recebe 2 alfabetos e substitui um
// caractere de um alfabeto por um caractere do alfabeto alternativo, contendo 2
// métodos: encode(codificação) e decode(decodificação) onde a posição de cada
// caractere em um alfabeto é mapeada para o alfabeto alternativo para codificação ou
// decodificação.
// Se um caractere fornecido não estiver no alfabeto oposto, deixe como está.
var cifraSubstituicao = /** @class */ (function () {
    function cifraSubstituicao(alfabeto1, alfabeto2) {
        this.Alfabeto1 = alfabeto1;
        this.Alfabeto2 = alfabeto2;
    }
    cifraSubstituicao.prototype.Encode = function (letras) {
        var arrayLetras1 = this.Alfabeto1.split("");
        var arrayLetras2 = this.Alfabeto2.split("");
        var arrayParametro = letras.split("");
        var arraySup = [];
        for (var index = 0; index < arrayLetras1.length; index++) {
            for (var index2 = 0; index2 < arrayLetras1.length; index2++) {
                if (arrayParametro[index] == arrayLetras1[index2]) {
                    arraySup.push(arrayLetras2[index2]);
                }
            }
        }
        var juntar = arraySup.join("");
        return juntar;
    };
    cifraSubstituicao.prototype.Decode = function (letras) {
        var arrayLetras1 = this.Alfabeto1.split("");
        var arrayLetras2 = this.Alfabeto2.split("");
        var arrayParametro = letras.split("");
        var arraySup = [];
        for (var index = 0; index < arrayLetras1.length; index++) {
            for (var index2 = 0; index2 < arrayLetras1.length; index2++) {
                if (arrayParametro[index] == arrayLetras2[index2]) {
                    arraySup.push(arrayLetras1[index2]);
                }
            }
        }
        var juntar = arraySup.join("");
        return juntar;
    };
    return cifraSubstituicao;
}());
var cifra = new cifraSubstituicao("abcdefg", "hijklmn");
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
var Suco = /** @class */ (function () {
    function Suco(sabor, quantidade) {
        this.Sabor = sabor;
        this.Quantidade = quantidade;
    }
    return Suco;
}());
function CriarSuco() {
    var sucoSabor = prompt("Insira o sabor do suco");
    var sucoQuantidade = parseInt(prompt("Insira a quantidade do suco em ML"));
    var suco1 = new Suco(sucoSabor, sucoQuantidade);
    return suco1;
}
var JarraDeSuco = /** @class */ (function () {
    function JarraDeSuco() {
        this.Sucos = [];
        this.QuantidadeTotal = 0;
        this.Concentracoes = [];
    }
    JarraDeSuco.prototype.AdicionarSuco = function (suco) {
        if (this.Sucos.length == 0) {
            this.Sucos.push(suco);
        }
        else {
            for (var index = 0; index < this.Sucos.length; index++) {
                if (suco == this.Sucos[index]) {
                    this.Sucos[index].Quantidade + suco.Quantidade;
                }
                else if (index == this.Sucos.length - 1) {
                    this.Sucos.push(suco);
                }
            }
        }
        this.QuantidadeTotal = this.QuantidadeTotal + suco.Quantidade;
        for (var index = 0; index < this.Sucos.length; index++) {
            var concentracao = (this.Sucos[index].Quantidade / this.QuantidadeTotal) * 100;
            var ponto = concentracao.toFixed();
            this.Concentracoes[index] = parseInt(ponto);
        }
        console.log("Suco adicionado!");
    };
    JarraDeSuco.prototype.Despejar = function (quantidade) {
        var quantidadeTotal2 = this.QuantidadeTotal - quantidade;
        this.QuantidadeTotal = quantidadeTotal2;
        console.log("Foi despejado da jarra " + quantidade + "ml");
    };
    return JarraDeSuco;
}());
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
