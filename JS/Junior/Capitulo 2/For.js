// let quemados = ["rulo", "ruso", "chipi"];

/* for(let i = 0; i <= 10; i++){
	document.write(i + " ");
}

document.write("<br>"); */

// Hay dos tipos de for aparte del tradicional

/* // El for in muentra los indices
for(quemado in quemados){
	document.write(quemado + " ");
	// Para mostrar el valor del indice dentro de un for in
	// document.write(quemados[quemado] + " ");
}

document.write("<br>");

// El for of muestra los valores
for(quemado of quemados){
	document.write(quemado + " ");
} */

array1 = ["rulo", "ruso", "ale"];
array2 = ["quemado1", "quemado2", "super", "quemado3"];


forEpico: // Sentencia label
for(let array in array2) {
	if(array == 2) {
		for (let array of array1) {
			document.write(array + "<br>");
			break forEpico; // Rompe la sentencia label, es decir todo lo que esta dentro de el
		}
	} else {
		document.write(array2[array] + "<br>");
	}
}
