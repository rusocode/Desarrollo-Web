let materias = {
		fisica: ["Jose", "rulo", "ruso", "chipi", "pipi"], // 0
		programacion: ["Miguel", "ruso", "chipi", "pipi"], // 1
		logica: ["Pedro", "rulo", "ruso", "pipi"], // 2
		quimica: ["Juan", "rulo", "pepex", "chipi", "pipi"] // 3
}

const inscribir = (alumno, materia) => {
	personas = materias[materia];
	if (personas.length >= 21) {
		document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas<br>`);
	} else {
		personas.push(alumno);
		if (materia == "fisica") {
			materias = {
		        fisica: personas,
		        programacion: materias['programacion'],
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}
		else if (materia == "programacion") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: personas,
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		} else if (materia == "logica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: personas,
		        quimica:materias['quimica']
	        }
		}else if (materia == "quimica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: materias['logica'],
		        quimica: personas
	        }
		}
		document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br>`);
	}
}

document.write(materias['fisica'] + "<br>")

inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");

document.write(materias['fisica'])