
/*Testando os conhecimentos! Crie uma função chamada `criaPares` 
que receba como parâmetro o array "valoresNum", nessa função 
deve ser executado um "for" que imprime 
na tela apenas os valores pares.*/


const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares () {
    for (let i = 0; i < valoresNum.length; i++) {
        if ((valoresNum[i]%2)===0){
            console.log(valoresNum[i])
        }
        
    }
    
}

criaPares(valoresNum)