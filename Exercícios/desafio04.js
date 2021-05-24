// 📌 Desafio de lógica 04 -  Funções
/* function nome(parâmetro){
    tarefa
} */

// RETURN
function double1 (num1){
    return num1*2
}
console.log (double1 (3))


// Mostrar Nome
function mostrarNome(name){
    return console.log(name)
}
mostrarNome ("Marcos Paulo Ramos Nogueira")
mostrarNome ("Zenin")


// Apresentação
function apresentação(nome, idade, música){
    return `Meu nome é ${nome} tenho ${idade} anos e adoro ouvir ${música}`
}
/* apresentação("Marcos P. Ramos N.", 22, "Músicas no âmbito geral") */

console.log (apresentação("Marcos P. Ramos N.", 22, "Músicas no âmbito geral"))


// Filme e música favoritas
function favoritos(filmeFav, músicaFav){
    return `Meu filme favorito é ${filmeFav} e minha música favorita é ${músicaFav}`
}
console.log(favoritos("Donnie Darko","Charlie Brown Jr. - Como Tudo Deve Ser"))


// tripo de x
function triplo (x){
    return console.log(x*10)
}
triplo (3)