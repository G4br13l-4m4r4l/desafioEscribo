//Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
//inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

/**
 * - Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.
 * - Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.
 */

function chamar(){
    let NumeroCalculo = parseInt(document.getElementById("num").value)
    soma(NumeroCalculo)
}

function soma(num){
    if(num > 0){
        let contador = 0
        for (let i=num-1;i>=0;i--){
            if(i%3== 0 || i%5 == 0){
                console.log(i)
                contador += i
            }
        }
        document.getElementById("result").innerHTML = "resultado: "+contador
        console.log("Resultado: "+contador)
    }
}
