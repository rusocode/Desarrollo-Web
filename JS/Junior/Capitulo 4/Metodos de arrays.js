let array = ["rulo", "ruso", "chipi", "pipi", "abc"];

// - METODOS TRANSFORMADORES
// document.write(array.pop()); // Elimina el ultimo elemento del array y lo devuelve
// document.write(array.shift()); // Elimina el primer elemento del array y lo devuelve
// document.write(array.reverse()); // Invierte el orden de los elementos del array
// document.write(array.sort()); // Ordena del array en el orden lexicografico

// Agrega uno o mas elementos al final del array
/* array.push("pipi");
document.write(array); */

// Agrega uno o mas elementos al inicio del array
/* array.unshift("pipi");
document.write(array); */

/* Elimina los elemenos que empiezan desde el elemento 1 hasta la cantidad especificada, que en este caso son 2.
 Luego se agregan los nuevos elementos a partir del primer elemento eliminado. */
// array.splice(1, 2, "quemado 1", "quemado 2");
// document.write(array);

// - METODOS ACCESORES
// Almacena el array como una cadena en la variable resultado
/* document.write(array[0] + "<br>");
let resultado = array.join();
document.write(resultado[0] + "<br>");
let resultado2 = array.join(" - "); // Tambien se le puede pasar un separador a la nueva cadena
document.write(resultado2); */

/* A diferencia del metodo substring, slice corta una parte del array empezando por el inicio hasta el 
fin (fin no incluido). */
// document.write(array.slice(0, 2)); // Para seleccionar todos los elementos se usa el 0 como segundo parametro

// - METODOS REPETIDORES
// Filter recibe por parametro una funcion
/* array.filter((elemento) => {
	document.write(elemento + "<br>");
}); */

/* Tambien tiene la posibilidad de devolver los elementos que cumplan con una condicion. En esta caso muestra
los elementos que tengan mas de 3 caracteres. */
/* let resultado = array.filter(elemento => elemento.length > 3);
document.write(resultado); */

// El forEach hace lo mismo que el filter pero sin podes usar condiciones
