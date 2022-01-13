/*
// Variables
string = "texto"
number = 24
booleano = false

// Declaracion de variables = var, let, const
var numero = 14;
*/

/* Actualmente se utiliza let, por que let nos limita el alcance de la variable al bloque en donde se ejecuta (if, else, etc.).
Entonces let tiene alcance por bloque y var alcance global. 

NOTA: Al declarar una variable sin especificar su alcance, entonces se le esta asignado el alcance "var" por defecto.

Ejemplo: variable = "ejemplo"; --> esto es igual a --> var variable = "ejemplo";

Conclusion: Es mejor usar "let variable = "ejemplo";" para definir su alcance.

*/

// Constante (seria como final en java)
// const nombre = "ruso"

// No se puede modificar la constante 
// nombre = "q hace!" // Error "Uncaught TypeError: Assignment to constant variable."
// Dato: Las const se tienen que declarar e inicializar en la misma linea para evitar errores

// Se puede omitir el ; para cerrar la linea, pero es mejor usarlo ya que evita problemas

// alert(nombre)

// ¿Como se declaran las variables en js?
// 1. ¿Que tipo de alcance (scope) va a tener?
// 2. ¿Que tipo de datos almacena (string, number, boolean, undefined (sin valor))?
// let numero = 29;

// let n1 = 1, n2 = 2, n3 = 3;	// Declarar muchas variables del mismo tipo en una sola linea

// alert(n1)
// alert(n2)
// alert(n3)


// ¿Podemos ejecutar cualquier parte del codigo antes de crea una variable?
// Aca entre en juego el termino de Hoisting


// ---------------------------------------------------


// - Null y Nan

/* La diferencia entre null y undefined, es que undefined quiere decir que la variable no esta definida (no tiene ningun valor), pero
null significa que la variable tiene un valor que es null xD (define un valor vacio). 

Undefined solo esta declarada pero no incializada.
Null esta declarada e inicializada en null. 

NaN = Not a Number (no es un numero)

let n1 = 2, n2 = "asd";
alert(n1 * n2)

Con esto hacemos saltar el mensaje de "NaN".

let n = prompt("Ingresa el monto que tenes");
document.write("Dinero: " + n - 1); // 	Esto da NaN por que al estar concatenando la cadena sin parentesis, entonces maneja n como una cadena y no un numero

*/

// Guarda el valor de entrada
// let nombre = prompt("Decime tu nombre") // prompt es una funcion

// alert("hola " + nombre)

// let n1 = 10;

// let resultado = n1--; // Asigna el valor de n1 a la var resultado y despues post decrementa n1 en 1
// let resultado2 = --n1; // Pre decrementa n1 en 1 y lo asigna a la var resultado2
// let exponencial = n1**2; // Eleva 10 a la 2
// let negacion = -n1;

// document.write(negacion); // Muestra el valor de resultado en el documento de html
