class Animal { // Abstraccion

	// Constructor
	constructor(especie, edad, color) {
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}

	// Polimorfismo (ejecutar metodos con diferentes caracteristicas)
	verInfo() {
		document.write(this.info + "<br>");
	}

}

class Perro extends Animal { // Herencia

	constructor(especie, edad, color, raza) {
		super(especie, edad, color);
		this.raza = null;
	}

	// Metodo
	ladrar() {
		alert("WAW!");
	}

	// Getter
	get getRaza() {
		return this.raza;
	}

	// Setter
	set setRaza(raza) {
		this.raza = raza;
	}

	// Metodo estatico
	static comer() {
		document.write("El perro esta comiendo!" + "<br>");
	}

}

// Creando instancias de los objetos
const perro = new Perro("perro", "5", "marron", "pichichi");
const gato = new Animal("gato", "2", "negro");
const pajaro = new Animal("pajaro", "1", "verde");

/* Esta es la forma correcta de llamar a los Getters y Setters. Estos metodos en su llamada son tratados como propiedad. */
perro.setRaza = "Labrador";
document.write(perro.getRaza);
