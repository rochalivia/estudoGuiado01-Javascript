const gato = "Magrelinha"
let idade = 14
let raca = "Pelo Curto Brasileiro"
let vacina = true
let castrado = true
let coisasQueElaGosta = []

let magrelinhaGosta01 = "carinho na Barriga"
let magrelinhaGosta02 = "comer muita ração"
let magrelinhaGosta03 = "de Brincar"

console.log("Bem-Vindo ao Projetinho da Lívia!!!")



console.log("Minha gatinha é a: " + gato + ". Ela tem " + idade + " anos de idade. Sua espécie é a " + raca + ". Ela foi vacinada? " + vacina + ". Ela foi castrada? " + castrado)
console.log("Dados: " , gato, idade, raca, vacina, castrado)



/**criação de um ARRAY! */

console.log("Array 1: ")
const minhaGatinhaFofinha = [
    gato,
    idade,
    raca,
    vacina,
    castrado

]

console.log("Utilizando o Array: ")

console.log(minhaGatinhaFofinha[0])
console.log(minhaGatinhaFofinha[1])
console.log(minhaGatinhaFofinha[2])
console.log(minhaGatinhaFofinha[3])
console.log(minhaGatinhaFofinha[4])

coisasQueElaGosta = [
    magrelinhaGosta01, magrelinhaGosta02, magrelinhaGosta03
]


console.log("Array 2: ")
console.log(coisasQueElaGosta)
console.log("Magrelinha AMA: " + coisasQueElaGosta[0])
console.log("Magrelinha Gosta: " + coisasQueElaGosta[1])
console.log("Magrelinha Curte: " + coisasQueElaGosta[2])
