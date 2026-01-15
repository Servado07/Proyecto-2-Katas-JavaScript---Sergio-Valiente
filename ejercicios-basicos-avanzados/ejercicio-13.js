const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nombreBuscado) {
  const indice = nameList.indexOf(nombreBuscado);
  if (indice !== -1) {
    return { existe: true, posicion: indice };
  } else {
    return false;
  }
}

console.log(nameFinder(names, "Bruce")); 
console.log(nameFinder(names, "Hola")); 

