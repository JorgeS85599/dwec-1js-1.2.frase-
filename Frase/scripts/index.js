'use strict'







let frase = prompt("Dime una frase: ");
console.log("Frase: \"" + frase + "\"");
console.log(letras(frase) + " letras y " + palabras(frase) + " palabras");
console.log(maysc(frase));
console.log(titulo(frase));
console.log(letrasReves(frase));
console.log(palabrasReves(frase));
palindromo(frase)?console.log('Es un palíndromo'):console.log('No es un palíndromo');


