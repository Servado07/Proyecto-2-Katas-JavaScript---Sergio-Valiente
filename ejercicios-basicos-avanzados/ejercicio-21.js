const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

console.log("Usuarios menores de edad: ");
for (let menor of users) {
  if (menor.years < 18) {
    console.log(menor.name);
  }
}
console.log("-------------------")
console.log("Usuarios mayores de edad: ");
for (let mayor of users) {
  if (mayor.years >= 18) {
    console.log(mayor.name);
  }
}