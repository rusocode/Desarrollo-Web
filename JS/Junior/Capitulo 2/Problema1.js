let free = true;

const validarCliente = (time)=> {
	let edad = prompt("¿Cual es tu edad?");
	if (edad > 18) {
		if (time >= 2 && time < 7 && free) {
			alert("Podes pasar gratis por que sos la primera persona despues de las 2AM");
			free = false;
		} else alert(`Son las ${time} y podes pasar, pero tenes que pagar la entrada`);
	} else alert("Sos menor de edad!");
}

validarCliente(11);
validarCliente(24);
validarCliente(0.2);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(5);

