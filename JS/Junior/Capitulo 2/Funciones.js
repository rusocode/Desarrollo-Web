// Primera forma
/* function saludar(nombre){
	document.write("Hola " + nombre + " como estas?");
} */

function sumar(n1, n2){
	return n1 + n2; // Las variables n1 y n2 tienen alcance dentro de la funcion
}

// document.write(sumar(5,7) + " <br>");

// Segunda forma
/* const saludar = function(nombre) {
	document.write(`Hola ${nombre} como estas?`);
} */

// Tercera forma(funcion flecha)
/* const saludar = (nombre) => {
	document.write("Hola " + nombre + " como estas?");
} */

/* Si es solo un parametro entonces se pueden omitir los parentesis y si es solo una linea 
 de codigo entonces se pueden omitir las llaves quedando mucho mas claro. */
const saludar = nombre => document.write("Hola " + nombre + " como estas?");

saludar("juan");