// 📌 Desafio de lógica 02 -  if/else
// 1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 22
var isHuman = true
if(idade >= 18){
    console.log("Parabéns, você tem mais de 18 anos")
}


// 2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
if ((idade >= 18) || (isHuman === true)){
    console.log("Parabéns, você tem mais de 18 anos e é um humano")
}


// 3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let birthday = "Janeiro"
if ((birthday === "Janeiro") || (birthday === "Dezembro")){
    console.log("Parabéns, você faz aniversário em Janeiro ou em Dezembro")
}


// *** Exercícios bônus
// 4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let name2 = "Rodrigo"
let sobrenome2 = "Estevan"

if (name2.charAt(0) === "R"){
    console.log("Oba! Seu nome começa com a letra R")
}


// 5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
if ((sobrenome2.length >= 6) || (sobrenome2.charAt (0) === "E")){
    console.log("WOW!!! Seu sobrenome tem mais de 6 letras ou começa com a letra E!")
}