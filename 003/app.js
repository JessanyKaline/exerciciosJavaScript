/* Exercicio 1 - Adicione `["cão", 3]` no final da `meusItens`.*/

const meusItens = [["Joao", 23], ["gato", 2]];

meusItens.push(["cão", 3])

console.log (meusItens)

/* Exercicio 2 -Faça uma função que execute um forEach em pedidos, que 
agora tem um status e imprima mensagens ao usuário de 
acordo com ele. Se:
a. Status for igual a "em preparo", imprima a mensagem 
"Seu pedido está sendo preparado"
b. Status for igual a "em preparo", imprima a mensagem 
"Seu pedido está sendo preparado"
c. Status for igual a "a caminho", imprima a mensagem 
"Entregador a caminho, fique atento!"
d. Status for igual a "entregue", imprima a mensagem 
"Pedido entregue"
e. Se não for nenhum desses status, imprima 
"Aguarde, processando pedido..."*/

const pedidos = [
    { id: 1, prato: "x-bacon", status: "em preparo" },
    { id: 2, prato: "sundae", status: "entregue" },
    { id: 3, prato: "fritas média", status: "entregue" },
    { id: 4, prato: "nuggets", status: "em preparo" },
    { id: 5, prato: "x-tudo", status: "n/a" },
  ];

  pedidos.forEach(function(pedido) {
     if ((pedido.status)=== "em preparo") {
        console.log ("Seu pedido está sendo preparado");
     }else if ((pedido.status)=== "a caminho") {
        console.log("Entregador a caminho, fique atento!");

     }else if ((pedido.status)=== "entregue") {
        console.log("Pedido entregue");

     }else{
        console.log("Aguarde, processando pedido...");
    
     }
    }
    
);


/* Exercicio 3 - Considerando o *Array* criado abaixo, utilize-o para: 

- Adicionar ao final da nossa lista de compras um novo item: café;
- Remover da nossa lista de compras o primeiro item;
- Adicionar ao início da nossa lista um novo item: chocolate;
- Remover da nossa lista o último item;*/

let minhaLista = ["bala fini", "suco", "coca-cola", "picanha", "toddynho"];

minhaLista.push("café");
minhaLista.shift();
minhaLista.unshift("chocolate");
minhaLista.pop();



console.log(minhaLista)

//Crie uma função chamada imprimeSaudacoes que imprime a string Olá, colegas!

function imprimeSaudacoes() {
    console.log("Olá, colegas!")
    
}

imprimeSaudacoes()

/* Exercicio 4 - Crie uma função chamada minhaSubtracao que aceite dois argumentos 
e envie sua soma para o console dev.*/

function minhaSubtrcao(num1, num2) {
    console.log(num1-num2)
    
}

minhaSubtrcao(5,2)

/* Exercicio 5 -Adicione uma variável local à minhaRoupafunção para substituir o 
valor de roupa pela string jaqueta.*/

const roupa = "T-Shirt";

function minhaRoupa() {
    const roupa = "jaqueta";
    return roupa;
}

minhaRoupa ()

/* - Armazene em `melhoresFilmes` apenas os filmes com
 avaliação igual ou superior a 7;
- Armazene em `filmesInfantis` apenas os filmes com 
censura menor ou igual a 14 */


const filmes = [
    {
      titulo: "A Fuga das Galinhas",
      censura: 10,
      nota: 7.1
    },
    {
      titulo: "Batman",
      censura: 14,
      nota: 8.5
    },
    {
      titulo: "As Branquelas",
      censura: 14,
      nota: 10
    },
    {
      titulo: "Titanic",
      censura: 16,
      nota: 3.2
    },
    {
      titulo: "A Noiva do Chuck",
      censura: 18,
      nota: 2.2
    }
  ]
  
  

  const melhoresFilmes = filmes.filter(function (filme) {
     return filme.nota >=7
  })

  const filmesInfantis = filmes.filter(function (filmeInfant) {
    return filmeInfant.censura <=14
 })
  
  
  console.log(melhoresFilmes)
  console.log(filmesInfantis)