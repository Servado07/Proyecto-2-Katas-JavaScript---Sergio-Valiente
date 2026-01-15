// 1.1 Añadir botón y evento Click
const boton = document.createElement("button");
boton.id = "btnToClick";
boton.textContent = "Púlsame y mira la consola";
document.body.appendChild(boton);

boton.addEventListener("click", function(evento) {
  console.log(evento);
});

// 1.2 Evento Focus 
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("focus", function(evento) {
  console.log(evento.target.value);
});

// 1.3 Evento Input 
const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", function(evento) {
  console.log(evento.target.value);
});