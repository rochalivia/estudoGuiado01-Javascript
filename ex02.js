
///Criação da MATRIZ (grupo maior)
let meuProprioMP3 = []


///essa função recebe parâmetro e refere-se ao grupo menor
function minhaPlaylistDeEstudo(musica, artista, minutos, favorita) {
    ///precisa retornar em array
    return [musica, artista, minutos, favorita]
}

///Inserção de dados via push: o grupo MAIOR(meuProprioMP3) recebe o grupo MENOR(minhaPlaylistDeEstudo)
meuProprioMP3.push(minhaPlaylistDeEstudo("Stay" , "Hans Zimmer" , "6:52", false))
meuProprioMP3.push(minhaPlaylistDeEstudo("Computer Love", "Kraftwerk", "7:19", false))
meuProprioMP3.push(minhaPlaylistDeEstudo("Oceanic 815", "Michael Giacchino" , "6:12", true))
meuProprioMP3.push(minhaPlaylistDeEstudo("Xtal", "Aphex Twin", "4:53" , false ))
meuProprioMP3.push(minhaPlaylistDeEstudo("Archangel", "Burial", "3:58", false))

///aqui se imprime com laço de repetição, todas as informações apenas uma vez (LÓGICA YAY), substituindo a forma manual

///no primeiro for o indice "i", irá percorrer o tamanho em linhas
///no segundo for o indice "j", irá percorrer o tamanho em colunas
///no console, imprimimos o valor que está na posição [i][j]

for (let i = 0 ; i < meuProprioMP3.length ; i++) {
    for (let j = 0 ; j < meuProprioMP3[i].length; j++){
       console.log(meuProprioMP3[i][j])
    }
}

///exemplo da forma manual
console.log(meuProprioMP3[0][1])
