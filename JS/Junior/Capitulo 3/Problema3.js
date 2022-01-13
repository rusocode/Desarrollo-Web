class App {
	
	constructor(descargas, puntuacion, peso) {
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.instalada = false;
		this.iniciada = false;
	}
	
	instalar() {
		if (!this.instalada) {
			this.instalada = true;
			alert("App instalada correctamente!")
		}
	}

	desinstalar() {
		if (this.instalada) {
			this.instalada = false;
			alert("App desinstalada correctamente!")
		}
	}

	iniciar() {
		if (this.instalada && !this.iniciada) {
			this.iniciada = true;
			alert("App iniciada");
		}
	}

	cerrar() {
		if (this.instalada && this.iniciada) {
			this.iniciada = false;
			alert("App cerrada");
		}
	}

	verInfo() {
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`
	}

}


app = new App("16.000", "5 estrellas", "900MB");
app2 = new App("1.000", "4 estrellas", "400MB");
app3 = new App("6.000", "4.5 estrellas", "100MB");
app4 = new App("23.000", "4.8 estrellas", "1GB");
app5 = new App("900", "5 estrellas", "250MB");
app6 = new App("17", "3.7 estrellas", "522MB");
app7 = new App("42.981", "2.9 estrellas", "723MB");


// app.instalar();
// app.iniciar();
// app.cerrar();
// app.desinstalar();

document.write(`
	${app.verInfo()} <br>
	${app2.verInfo()} <br>
	${app3.verInfo()} <br>
	${app4.verInfo()} <br>
	${app5.verInfo()} <br>
	${app6.verInfo()} <br>
	${app7.verInfo()} <br>
`);
