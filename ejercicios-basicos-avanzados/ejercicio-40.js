const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

function removeItem(array, text) {
  const indice = findArrayIndex(array, text);

  if (indice > -1) {
    array.splice(indice, 1);
  }

  return array;
}

console.log("Pruebas de busqueda (findArrayIndex)");
console.log(
  "Posición de Han Solo:",
  findArrayIndex(mainCharacters, "Han Solo")
);
console.log("Posición de Anakin:", findArrayIndex(mainCharacters, "Anakin"));
console.log(
  "Posición de Yoda (no existe):",
  findArrayIndex(mainCharacters, "Yoda")
);
console.log("");
console.log("Pruebas de borrado (removeItem)");
console.log("1. Borramos a Luke:", removeItem(mainCharacters, "Luke"));
console.log("2. Borramos a Obi-Wan:", removeItem(mainCharacters, "Obi-Wan"));
console.log(
  "3. Intentamos borrar a Darth Vader (no está):",
  removeItem(mainCharacters, "Darth Vader")
);
console.log("4. Borramos a Leia:", removeItem(mainCharacters, "Leia"));
