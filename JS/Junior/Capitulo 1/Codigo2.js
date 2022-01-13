// --Concatenacion 
/* n1 = 4;
n2 = 22;

frase = "" + n1 + n2;

document.write(frase);
*/

/*
let nombre = "rulo quemado";

// Es importante usar el acento grave
frase = `soy ${nombre} y estoy quemado`; // alt + 96 = acento grave

document.write(frase);
*/

// --Operadores de comparacion (<, >, <=, >=, !=) y logicos (&&, ||, !)
let n1 = 3;
let n2 = 5;
let texto = "3";

// document.write(n1 === texto); // Operador de identidad, es decir que compara el valor y el tipo de dato
// document.write(n1 !== texto); // Es estrictamente distinto ?

// --Camel Case 
// holaComoEstas
// document.getElementById();
// La primera palabra no comienza con mayusculas, pero cada palabra que venga despues si


// --Condicionales
nombre = "rulo";

if (nombre == "rulo") {
	alert("Tu nombre es " + nombre);
} else if (nombre == "ruso") {
	alert("Tu nombre es " + nombre);
} else {
	alert("No sos ruso ni rulo");
}

/* Dato: Si por ejemplo el primer if se cumple entonces no pregunta por el "if else" siguiente.
Pero si usamos un if comun despues del primer if, y el primer if se cumple, va a comprobar si el segundo if
se cumple. Con esto se estarian desperdiciando recursos. */