//📌 Desafio de lógica 06 - Estrutura de dados complexos (Array e Objeto)
// OBJETO {chaves} coleção de dados com valores e tipos de dados mistos
/* const nomeDaVariável = {
    propriedade: valor,
    propriedade: valor
} */

// Crie um objeto que receba ao menos três propriedades sobre você.
const aboutMe = {
    nomeAbout: "Marcos Paulo Ramos",
    idadeAbout: 22,
    humanoAbout: true
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
aboutMe.profissãoAbout = "Telemarketing"

// Remova uma propriedade desse objeto.
delete aboutMe.profissãoAbout

//Mostre no console todas as propriedades desse objeto.
console.log(aboutMe);


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {
        nome1: "Marcos Paulo Ramos",
        idade1: 22,
        telefone1: "21971843908",
        amigos1: ["amigo1", "amigo2", "amigo3", "amigo4"]
    },
    {
        nome2: "Ludi-K",
        idade2: 27,
        telefone2: "21995957481",
        amigos2: ["friend1", "friend2", "friend3", "friend4"]
    },
    {
        nome3: "Pablo Clemente",
        idade3: 30,
        telefone3: "21985524566",
        amigos3: ["amg1", "amg2", "amg3", "amg4"]
    },
    {
        nome4: "Matheus Ramos",
        idade4: 24,
        telefone4: "21963578951",
        amigos4: ["bf1", "bf2", "bf3", "bf4"]
    },
    {
        nome5: "Yuri",
        idade5: 26,
        telefone5: "21914725698",
        amigos5: ["ami1", "ami2", "ami3", "ami4"]
    }
]


console.log(cadastro);
console.log(cadastro[0]);
console.log(cadastro[0].amigos1[0]);
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos1[3]);
console.log(cadastro[1].amigos2[3]);
console.log(cadastro[2].amigos3[3]);
console.log(cadastro[3].amigos4[3]);
console.log(cadastro[4].amigos5[3]);
// OU
console.log(cadastro[0].amigos1[0], cadastro[1].amigos2[0], cadastro[2].amigos3[0], cadastro[3].amigos4[0], cadastro[4].amigos5[0])