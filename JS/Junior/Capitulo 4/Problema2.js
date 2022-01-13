const getMateria = (materia) => {
	materias = {
		fisica: ["Jose", "rulo", "ruso", "chipi", "pipi"], // 0
		programacion: ["Miguel", "ruso", "chipi", "pipi"], // 1
		logica: ["Pedro", "rulo", "ruso", "pipi"], // 2
		quimica: ["Juan", "rulo", "pepex", "chipi", "pipi"] // 3
	}

	/* Si la materia existe en el array de objetos, entonces devuelve la materia, los alumnos y el array 
	de objetos. */
	if (materias[materia] != undefined) return [materia, materias[materia], materias]; 
	else return materias;
}

const mostrarInformacion = (m) => {

	let materia = getMateria(m);

	if (materia != false) { // !== o != ?

		let profesor = materia[1][0]; // Obtiene el elemento [1][0] del array
		let alumnos = materia[1]; // Obtiene todos los elementos [1] del array
		alumnos.shift(); // Elimina el primer elemento, osea el profesor

		document.write(`El profesor de <i>${m}</i> es: <b>${profesor}</b><br>
			Los alumnos son: <b style="color:red">${alumnos}</b><br><br>`);
	} else document.write(`La materia "${m}" no existe!<br>`);

}

const cantidadDeClases = (alumno) => {

	let materia = getMateria();
	let clases = [];

	// Itera todas las materias
	for (info in materia) {
		// Si la materia contiene el alumno especificado, entonces lo agrega al array con el metodo push
		if (materia[info].includes(alumno)) clases.push(" " + info);
	}

	return `<b style='color:blue'>${alumno}</b> esta cursando: <b>${clases}</b><br>`;
}

mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("rulo"));
document.write(cantidadDeClases("ruso"));
