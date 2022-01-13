let cantidadAlumnos = prompt("¿Cuantos alumnos son?");
let alumnos = []; // Array bidimensional
const dias = 5;

// Agrega los nombres de los alumnos y las asistencias al array
for (i = 0; i < cantidadAlumnos; i++) {
	alumnos[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

const tomarAsistencia = (nombre, p) => {
	let asistencia = prompt("Asistencia para " + nombre);
	// Si esta presente, entonces se le suma el numero de asistencias
	if(asistencia == "p" || asistencia == "P") alumnos[p][1]++;
}

// Toma lista a cada uno de los alumnos 5 dias seguidos
for (i = 0; i < dias; i++) {
	for (alumno in alumnos) {
		tomarAsistencia(alumnos[alumno][0], alumno); // Le pasa el nombre y el indice
	}
}

for (alumno in alumnos) {
	let resultado = `${alumnos[alumno][0]}:<br>
	_______Presentes: <b>${alumnos[alumno][1]}</b><br>
	_______Ausencias: <b>${dias - alumnos[alumno][1]}</b>`;
	if (dias - alumnos[alumno][1] > 1) {
		resultado += "<b style='color:red'> Reprobado por inasistencia </b><br>";
	} else {
		resultado += "<br><br>";
	}
	document.write(resultado);
}
