// Selecciona un elemento por ID
// elemento = document.getElementById("texto1");

// Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
// elemento = document.getElementsByTagName("div");
// document.write(elemento); // Devuelve una lista de los elementos div
// document.write(elemento[1]); // Devuelve un elemento del array que contiene las etiquetas div

// Devuelve el primer elemento que coincida con el grupo especificado de selectores
// elemento = document.querySelector(".texto3");
// document.write(elemento);

// Devuelve todos los elementos que coincidan con el grupo especificado de selectores
elemento = document.querySelectorAll(".parrafo");
document.write(elemento[0]);