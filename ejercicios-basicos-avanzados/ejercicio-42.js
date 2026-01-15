const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indiceA, indiceB) {
  const elementoTemporal = array[indiceA];

  array[indiceA] = array[indiceB];
  array[indiceB] = elementoTemporal;

  return array;
}

console.log("Intercambio (0 y 3):", swap(fantasticFour, 0, 3));
console.log("Intercambio (1 y 2):", swap(fantasticFour, 1, 2));

