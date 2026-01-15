console.log("2.1")

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log(pointsListCopy);


console.log("2.2")

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = { ...toy };

console.log(toyCopy);


console.log("2.3")

const pointsListA = [32, 54, 21, 64, 75, 43];
const pointsListB = [54, 87, 99, 65, 32];

const combinedPoints = [...pointsListA, ...pointsListB];
console.log(combinedPoints);


console.log("2.4")

const toyBase = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const mergedToy = { ...toyBase, ...toyUpdate };
console.log(mergedToy);


console.log("2.5")

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy); 
