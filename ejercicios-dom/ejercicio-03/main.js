// 1.1 Lista de países
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const listaUl = document.createElement("ul");

for (const pais of countries) {
  const li = document.createElement("li");
  li.textContent = pais;
  listaUl.appendChild(li);
}
document.body.appendChild(listaUl);

// 1.2 Eliminar elemento
const elementoBorrar = document.querySelector(".fn-remove-me");
elementoBorrar.remove();

// 1.3 Lista de coches en un sitio específico
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const divDestino = document.querySelector('[data-function="printHere"]');
const listaCoches = document.createElement("ul");

for (const coche of cars) {
  const li = document.createElement("li");
  li.textContent = coche;
  listaCoches.appendChild(li);
}
divDestino.appendChild(listaCoches);

// Imagenes para 1.4, 1.5 y 1.6
const countriesData = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

// 1.5 Botón para eliminar el último (Lo creamos antes para que salga arriba)
const botonBorrarUltimo = document.createElement("button");
botonBorrarUltimo.textContent = "Eliminar el último";

botonBorrarUltimo.addEventListener("click", function () {
  const todosLosDivs = document.querySelectorAll(".div-pais");
  // Si hay elementos, borramos el último de la lista
  if (todosLosDivs.length > 0) {
    todosLosDivs[todosLosDivs.length - 1].remove();
  }
});
document.body.appendChild(botonBorrarUltimo);

// 1.4 y 1.6 Creación de elementos con botón individual
for (const pais of countriesData) {
  const divPais = document.createElement("div");
  divPais.className = "div-pais";

  const titulo = document.createElement("h4");
  titulo.textContent = pais.title;

  const imagen = document.createElement("img");
  imagen.src = pais.imgUrl;

  // 1.6 Botón para eliminar ESTE elemento
  const botonEliminarEste = document.createElement("button");
  botonEliminarEste.textContent = "Eliminar este";

  botonEliminarEste.addEventListener("click", function () {
    divPais.remove();
  });

  divPais.appendChild(titulo);
  divPais.appendChild(imagen);
  divPais.appendChild(botonEliminarEste);

  document.body.appendChild(divPais);
}
