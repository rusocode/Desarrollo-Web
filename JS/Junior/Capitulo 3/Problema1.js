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
		Memoria Ram: <b>${this.ram}</b></br>
		`;
	}
}


const celular1 = new Celular("rojo", "150g", "5'", "HD", "1GB");
const celular2 = new Celular("negro", "155g", "5.4'", "Full HD", "2GB");
const celular3 = new Celular("blanco", "15046g", "5.9'", "Full HD", "2GB");

celular1.encender();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.encender();

document.write(`
	${celular1.verInfo()} <br>
	${celular2.verInfo()} <br>
	${celular3.verInfo()} <br>
`);
