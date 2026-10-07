

function produto(
    nomeProduto, marca, tom, preco, quantidadeRestante, lacrado, dataValidade
) {
    return [nomeProduto, marca, tom, preco, quantidadeRestante, lacrado, dataValidade]
}


let necessaireMaquiagem = []

necessaireMaquiagem.push(produto("Batom", "Sephora", "Magenta", 40, 2, true, "2027/8/28"))


necessaireMaquiagem.push(produto("Sombra", "Mac Cosmetics", "Azul Turquesa", 40, 1, true, "2027/9/28"))

/**MATRIZES YAY!!!!!!
console.log(necessaireMaquiagem[0][0])
console.log(necessaireMaquiagem[0][1])
console.log(necessaireMaquiagem[0][2])
console.log(necessaireMaquiagem[0][3])
console.log(necessaireMaquiagem[0][4])
console.log(necessaireMaquiagem[0][5])
console.log(necessaireMaquiagem[0][6])

console.log(necessaireMaquiagem[1][0])
console.log(necessaireMaquiagem[1][1])
console.log(necessaireMaquiagem[1][2])
console.log(necessaireMaquiagem[1][3])
console.log(necessaireMaquiagem[1][4])
console.log(necessaireMaquiagem[1][5])
console.log(necessaireMaquiagem[1][6])
**/


///LÓGICA YAY
for (let i = 0; i < necessaireMaquiagem.length; i++) {
    for (let j = 0; j < necessaireMaquiagem[i].length; j++) {
        console.log(necessaireMaquiagem[i][j])
    }
}
