 /*function impar (numero){
      if(numero % 2 == 1) {
        print('numero-impar: ', numero)
        return true
      } else {
        return false
      }      
}

numero = [1,2,3, ...100]
*/


function impar() {
    for (i=0; i<100; i++) {
        if(i % 2 == 1) {
            print('numero-impar: ', numero[i])
    }
  }
}

function divisibleporcinco(numeros) {
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 5 === 0) {
            console.log(`${numeros[i]} es divisible por cinco / TRUE`);
        } else {
            console.log(`${numeros[i]} no es divisible por cinco / FALSE`);
        }
    }
}

const numeros = [1, 3, 5, 8, 9, 10, 12, 15, 20];

divisibleporcinco(numeros);
  