class Celular {

	constructor(color, peso, tamaño, rdc, ram) {
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.rdc = rdc;
		this.ram = ram;
		this.encendido = false;
	}

	encender() {
		if (!this.encendido) {
			alert("Celular prendido");
			this.encendido = true;
		} else {
			alert("Celular apagado");
			this.encendido = false;
		}
	}

	reiniciar() {
		if (this.encendido) alert("Reiniciando celular");
		else alert("El celular esta apagado");
	}

	tomarFoto() {
		alert(`Foto tomada en resolucion ${this.rdc}`);
	}

	grabarVideo() {
		alert(`Grabando video en ${this.rdc}`);
	}

	verInfo() {
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Resolucion de Video: <b>${this.rdc}</b></br>
		Memoria RAM: <b>${this.ram}</b></br>
		`;
	}
}

class CelularAltaGama extends Celular {
	
	constructor(color, peso, tamaño, rdc, ram, rdce) {
		super(color, peso, tamaño, rdc, ram);
		this.rdce = rdce;
	}

	grabarVideoLento() {
		alert("Estas grabando en camara lenta");
	}

	reconocmientoFacial() {
		alert("Vamos a iniciar un reconocimiento facial...")
	}

	infoAltaGama() {
		return this.verInfo() + `Resolucion de camara extra: ${this.rdce}`;
	}
}

celular1 = new CelularAltaGama("rojo", "130g", "5.2", "4K", "3GB", "Full HD");
celular2 = new CelularAltaGama("negro", "142g", "6", "4K", "4GB", "HD");

document.write(`
	${celular1.infoAltaGama()} <br><br>
	${celular2.infoAltaGama()} <br>
`);
