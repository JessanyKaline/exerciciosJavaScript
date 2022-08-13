/*Exercicio 1 -Crie uma variável chamada `hojeVaiChover` e uma condicional `if` que imprima na tela o seguinte:

- "Leve seu guarda-chuva, hoje vai chover" se o valor for verdadeiro
- "Fique tranquilo, hoje será um dia de sol" se o valor for falso*/

let hojeVaiChover = false;

if (hojeVaiChover) {
    console.log ("Leve seu guarda-chuva");

}else{                                                        
    console.log ("Fique tranquilo, hoje será um dia de sol");
}

/*Exercicio 2 - 2. **Crie variáveis para cada uma das comparações e imprima o resultado delas**
    1. 5 é maior que 1
    2. 2000000 é menor que 3000000000
    3. "Banana" é igual a "Banana"
    4. "50" é estritamente igual a 50
    5. "Carro" é diferente de "bicicleta"
    6. 50 é maior que 27
    7. 975 é menor ou igual a 1200*/

let a = 5 > 1;

if (a){
    console.log (true);
}else{
    console.log (false);
}

let b = 200000 < 300000;

if (b){
    console.log (true)
}else{
    console.log (false)
}

let c = "banana" == "banana";

if (c){
    console.log (true)
}else{
    console.log (false)
}

let d = "50" === 50;

if (d){
    console.log (true)
}else{
    console.log (false)
}

let e = "carro" !== "bicicleta";

if (e){
    console.log (true)
}else{
    console.log (false)
}


let f = 50 > 27;

if (f){
    console.log (true)
}else{
    console.log (false)
}

let g = 975 <= 1200;

if (g){
    console.log (true)
}else{
    console.log (false)
}

/*Exercicio 3 - Faça um objeto que representa um cachorro chamado meuCachorroque contém as propriedades
 nome(uma string) patas, caudase principalAmigo.

Exercicio 6 - Adicione uma propriedade brinquedoFavorito ao objeto  meuCachorro criado anteriormente e 
defina-a, como "bolinha". Você pode usar a notação de ponto ou colchete. Imprima-o.

Exercicio 7 -Delete a propriedade patas do objeto meuCachorro e imprima-o em seguida. Você pode usar 
a notação de ponto ou colchete.

Exercicio 8 - Altere a propriedade `nome` do objeto `meuCachorro` definindo-a como "Pluto". 
Imprima o objeto em seguida.
*/

const meuCachorro = {
    nome: "Mahina",
    patas: 4,
    caudas: 1,
    principalInimigo: "Não tem inimigos"
};

meuCachorro.nome = "Pluto";

delete meuCachorro.patas;

meuCachorro["brinquedoFavorito"] = "bolinha";

console.log (meuCachorro)

/*Exercicio 4 - Leia os valores de propriedade de roupas usando a notação de ponto. 
Defina a variável valorChapeu igual à propriedade do objeto chapeu e defina a variável 
valorCamiseta igual à propriedade do objeto camiseta.*/

const roupas = {
    "chapeu": "bone",
    "camiseta": "camiseta do batman",
    "sapatos": "tenis da nike"
};

const valorChapeu = roupas.chapeu;
const valorCamisa = roupas.camiseta;

console.log(valorChapeu);
console.log(valorCamisa);

/* Exercicio 5 - Leia os valores das propriedades a entrada 
e o drink do objeto pedido uso da notação de colchetes e 
atribua-os a valorEntrada e valorDrink respectivamente, 
por fim, imprima-os.*/

const pedido = {
    "a entrada": "hamburguer",
    "o adicional": "vegetais",
    "o drink": "coca-cola"
};

const valorEntrada = pedido["a entrada"];
const valorDrink = pedido["o drink"];

console.log(valorEntrada);
console.log(valorDrink);

//Exercicio 6 - Adicionei um item ao objeto meuCachorro

// Exercicio 7 - Deletei um item do objeto meuCachorro

// Exercicio 8 - Mudei um nome do objeto meuCachorro

/* Exercicio 8.1 - Modifique a nova matriz meuArray para que contenha uma string e 
um número (nessa ordem). Imprima-a.*/

const meuArray = ["Lua", 4];

console.log(meuArray);

/* Exercicio 9 - Crie uma variável chamada meuValor e defina-a para ser igual ao primeiro valor 
meuArray usando a notação de colchetes, e imprima seu valor.*/

const meuArray2 = [50, 60, 70];

const meuValor = meuArray2[1];

console.log(meuValor);

/* Exercicio 10 - Modifique os dados armazenados no índice 0de meuArray para um valor de 
45 e imprima-o.*/

const meuArray3 = [23, 44, 98];
meuArray3[0]= 45;

console.log(meuArray3[0]);





