console.log('Olá, Javascript!')

var userName = 'Elias'

document.getElementById('user-name').innerHTML = userName

//VARIAVERIS//

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi) */

//OPERADORES NUMERICOS//

// var n1 = 5
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// + para somar
// - para subtrair
// * para multiplicar
// / dividir

// var total = n1 + n2
// console.log(total)

//OPERADORES DE COMPARACAO//

// var v1 = 5
// var v2 = 5
// == igual
//retorna verdadeiro se os valores forem iguais
// 1=='1'//true

// != nao igual
// retorna verdadeiro se os valores comparados nao forem iguais. tbm pode ser chamaddo de diferente de
// 4!=1 //true

// === igual estrito
// operador masi severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais
// 3==='3' //true
// 3===3 //true

// !== nao igual restrito
// retorna verdadeiro se os valores e ou os  tipos forem diferentes
// 3!=='3' //true
// 3!==3 // false
// 3!==4 // true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro

// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro

// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true

// var resultado = v1 === v2
// console.log(resultado)


//FUNCOES//

// function soma(n1, n2){
//     console.log(n1 + n2)
// }

// soma( 5, 5)

// function boasVindas(nome){
//     alert(nome + ', seja bem vindo(a)')
// }
// boasVindas('Elias')

// function soma (n1, n2) {
//     return n1 + n2
// }

// var resultado = soma (5, 5)
// console.log(resultado)

//CONTROLE DE FLUXOS//

// var saldo = 1000

// function saque(valor){

//     if(valor > saldo){
//         console.log('Valor do saque superior ao saldo')
//     }else if(valor > 700){
//         console.log('Valor do saque é superior ao maximo permitido por operacao')
//     } else {
//         saldo = saldo - valor
//     }
    
// }
//  saque(701)
//  console.log(saldo)

// Sendo um cliente correntista do banco 
// Posso sacar dinheiro em caixas eletronicos
// Para poder comprar em lugares que nao aceitam cartoes de debito ou credito

// Cenario 1: Saque com sucesso
// Dado que meu saldo e de 1000 reais
// Quando faco um saque de 500 reais
// Entao o valor do saque deve ser deduzido do meu saldo

// Cenario 2: Saque com valor superior ao saldo 
// Dado que meu saldo e de 1000 reais
// Quando faco um saque de 1001 reais
// Entao nao deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor e superior ao saldo

// Cenario 3: Saque com valor maximo
// Dado que meu saldo e de 1000 reais
// E o valor maximo por operacao e de 700 reais
// Quando faco um saque no valor de 701 reais
// Entao nao deve deduzir do meu salddo
// E deve mostar uma mensagem de alerta informando que o valor e superior ao maximo permitido

//ARRAYS//

// var gaveterio = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveterio)

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader',]

// personagens.push('C3pO')
// personagens.push('R2D2')

// //personagens.pop()

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)

// CONTROLES DE REPETICAO- (LOOPS)//

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for(var i in personagens){
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++){
//     console.log(i)
    // codigo vair ser executado ate a condicao retornar false
//}


//OBJETOS//

// var yoda = {
//     nome: 'Yoda',
//     idade: 100,
//     jedi: true,
    
//     mostraIdade: function(){
//         console.log(`A idade do ${this.nome} é ${this.idade} anos`)        
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

//CONSTANTES//

const nome = 'Darth Vader'
console.log(nome)

nome ='Mestre Yoda'
console.log(nome)


