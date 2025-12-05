// 1. Luke Skywalker cumple años:
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;

console.log(jedi);

// 2. Presentación al estilo Leia Organa:
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log(
  "Soy",
  nombre,
  ", tengo",
  edad,
  "años y soy una princesa de Alderaan"
);

//3. Calculando el coste totale de sbales de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

suma = sable1.precio + sable2.precio;
console.log("El precio total de los dos sables es de:", suma);

//4. Actualizando el precio final de las naves:
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = {
  nombre: "Halcón Milenario",
  precioBase: 70000,
  precioFinal: 80000,
};

precioBaseGlobal = 25000;

sumaNave1 = nave1.precioBase + precioBaseGlobal;
sumaNave2 = nave2.precioBase + precioBaseGlobal;

nave1.precioFinal = sumaNave1;
nave2.precioFinal = sumaNave2;
console.log(nave1);
console.log(nave2);
