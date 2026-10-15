///guardando dentro de uma VARIAVEL

let nome = window.prompt('Qual seu nome?')

let gostando = window.confirm('Está gostando?')

///Tratando Dados dentro do Js (Convertendo "forçando" para Inteiro)

let n01 = Number.parseInt(window.prompt('Digite um numero *inteiro*?'))
let n02 = Number.parseInt(window.prompt('Digite outro numero *inteiro*?'))

let resultado001 = n01 + n02
window.alert('O resultado é ' + resultado001)

///utilizando concatenação: +

window.confirm('Vamos para o próximo?')

///Modo mais atual, transformando qualquer tipo de String, em Numero(utilizando apenas Number, recebendo todos os tipos de numero). Utilizando Template String para concatenação.

///Number aceita todos os tipos de numero
///Template String utiliza-se ```no lugar de '', e ${VARIAVEL} para o objeto.

let n1 = Number(window.prompt('Digite por favor, um número? *qualquer um*'))
let n2 = Number(window.prompt('Digite outro número? *qualquer um*'))

let r1 = n1 + n2

///aplicação do template string
let resultado1 = window.alert(`O resultado de agora, é: ${r1}!!!`)


///Resultados na Tela!!!!!

const nomehtml = document.getElementById('nomehtml')
nomehtml.textContent = nome

const resultado00 = document.getElementById('resultado00')
resultado00.textContent = resultado001

const resultado01 = document.getElementById('resultado01')
resultado01.textContent = r1


///
