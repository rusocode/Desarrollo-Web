class Calculadora {

	constructor() {

	}

	static sumar (num1,num2) {
		return parseInt(num1) + parseInt(num2);
	}

	static restar (num1,num2) {
		return parseInt(num1) - parseInt(num2);
	}

	static dividir (num1,num2) {
		return parseInt(num1) / parseInt(num2);
	}

	static multiplicar (num1,num2) {
		return parseInt(num1) * parseInt(num2);
	}

	static potenciar(num, exp) {
		return num**exp;
	}

	static raizCuadrada(num) {
		return Math.sqrt(num);
	}

	static raizCubica(num) {
		return Math.cbrt(num);
	}

}

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: Suma, 2: Resta, 3: División, 4: Multiplicación, 5: Potenciacion, 6: Raíz cuadrada, 7: Raíz cubica");

if (operacion == 1 || operacion == 2 || operacion == 3 || operacion == 4) {
	
	let numero1 = prompt("Primer número para operar");
	let numero2 = prompt("Segundo número para operar");
	
	if (operacion == 1) {
		resultado = Calculadora.sumar(numero1,numero2);
		alert(`Tu resultado es ${resultado}`);
	} else if (operacion == 2) {
		resultado = Calculadora.restar(numero1,numero2)
		alert(`Tu resultado es ${resultado}`);
	} else if (operacion == 3) {
		resultado = Calculadora.dividir(numero1,numero2)
		alert(`Tu resultado es ${resultado}`);
	} else if (operacion == 4) {
		resultado = Calculadora.multiplicar(numero1,numero2)
		alert(`Tu resultado es ${resultado}`);
	}

} else if (operacion == 5) {
	let numero1 = prompt("Número a potenciar");
	let numero2 = prompt("Exponente");
	resultado = Calculadora.potenciar(numero1,numero2)
	alert(`Tu resultado es ${resultado}`);
} else if(operacion == 6) {
	let numero1 = prompt("Conocer la raíz cuadrada de:");
	resultado = Calculadora.raizCuadrada(numero1)
	alert(`Tu resultado es ${resultado}`);
} else if (operacion == 7) {
	let numero1 = prompt("Conocer la raíz cúbica de:");
	resultado = Calculadora.raizCubica(numero1)
	alert(`tu resultado es ${resultado}`);
} else alert("No se ha encontrado la operación!")

