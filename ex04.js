///acessando pela arvore dom o elemento body e alterando o bg por js
const corpo = document.body
corpo.style.background = '#FFD1DC'

///Selecionar por tipo de tag:
///dentro do parâmetro passamos em aspas simples a tag referida, e dentro dos colchetes qual sua posição (por haver possibilidade de mais de um elemento)
const titulo = document.getElementsByTagName('h1')[0]
titulo.textContent = 'Estudando DOM em JavaScript!!'


const paragrafo = document.getElementsByTagName('p')[0]
paragrafo.textContent = 'Meu primeiro paragrafo em js!!!'

/// o getElementsByClassName sempre devolve uma lista, então sempre usar o [indice]

const porClasse = document.getElementsByClassName('minhaClasseAqui')
porClasse[0].textContent = 'Algo ainda mais legal aqui'


///Selecionar por id, cada id é unico por isso não há necessidade de indice:

const porId = document.getElementById('minhaIdAqui')
porId.textContent = 'Algo legal aqui :D'


///Selecionar utilizando o Query Selector:::
const porQuerySelector = document.querySelector('div#msg')
porQuerySelector.textContent = 'Olá Mundo, isso foi feito através do querySelector :D'
porQuerySelector.style.background = 'magenta'
