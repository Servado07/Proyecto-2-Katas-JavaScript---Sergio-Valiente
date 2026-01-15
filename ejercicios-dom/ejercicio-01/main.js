//1.1 Mostrar por consola el boton
const boton = document.querySelector(".showme");
console.log(boton);

// 1.2 Mostrar por consola el H1
const titulo = document.querySelector("#pillado");
console.log(titulo);

//1.3 Mostrar por consola los parrafos
const todosLosParrafos = document.querySelectorAll("p");
console.log(todosLosParrafos);

//1.4 Mostar por consola los elementos clase.pokemon
const todosLosPokemon = document.querySelectorAll(".pokemon");
console.log(todosLosPokemon);

//1.5 Mostrar por consola los elementos con atributo data-function="testMe"
const todosLosTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(todosLosTestMe);

//1.6 Mostrar por consola el personale 3
const tercerPersonaje = todosLosTestMe[2];
console.log(tercerPersonaje);
