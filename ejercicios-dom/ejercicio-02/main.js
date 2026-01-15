// 2.1 Div vacío
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 2.2 Div con p dentro
const divConParrafo = document.createElement("div");
const parrafoInterno = document.createElement("p");
divConParrafo.appendChild(parrafoInterno);
document.body.appendChild(divConParrafo);

// 2.3 Div con 6 p (bucle)
const divBucle = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const parrafo = document.createElement("p");
  divBucle.appendChild(parrafo);
}
document.body.appendChild(divBucle);

// 2.4 P con texto dinámico
const parrafoDinamico = document.createElement("p");
parrafoDinamico.textContent = "Soy dinámico!";
document.body.appendChild(parrafoDinamico);

// 2.5 Modificar el h2
const tituloH2 = document.querySelector("h2.fn-insert-here");
tituloH2.textContent = "Wubba Lubba dub dub";

// 2.6 Lista basada en array
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const listaUl = document.createElement("ul");

for (const app of apps) {
  const elementoLi = document.createElement("li");
  elementoLi.textContent = app;
  listaUl.appendChild(elementoLi);
}
document.body.appendChild(listaUl);

// 2.7 Eliminar elementos
const elementosAborrar = document.querySelectorAll(".fn-remove-me");
for (const elemento of elementosAborrar) {
  elemento.remove();
}

// 2.8 Insertar en medio
const todosLosDivs = document.querySelectorAll("div");
const parrafoMedio = document.createElement("p");
parrafoMedio.textContent = "Voy en medio!";
document.body.insertBefore(parrafoMedio, todosLosDivs[1]);

// 2.9 Insertar dentro de clases específicas
const divsInsertar = document.querySelectorAll("div.fn-insert-here");
for (const div of divsInsertar) {
  const parrafoDentro = document.createElement("p");
  parrafoDentro.textContent = "Voy dentro!";
  div.appendChild(parrafoDentro);
}