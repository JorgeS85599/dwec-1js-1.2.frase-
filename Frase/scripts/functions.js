'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	return cadena.split(" ").length;
}

function maysc(cadena) {
	return cadena.toLocaleUpperCase();
}

function titulo(cadena) {
	let array = cadena.split(" ");
	let arrayModificado = new Array();
	array.forEach(element => {
		arrayModificado.push((element.charAt(0).toLocaleUpperCase() + element.substring(1,element.length + 1)))
	});
	return arrayModificado.join(" ");
}

function letrasReves(cadena) {
	return cadena.split("").reverse().join("");
}

function palabrasReves(cadena) {
	return cadena.split(" ").reverse().join(" ");
}

function palindromo(cadena) {
	return cadena.split(" ").join("").toLocaleLowerCase() === letrasReves(cadena).split(" ").join("").toLocaleLowerCase();
}

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}