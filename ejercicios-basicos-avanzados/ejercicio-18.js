const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const newplaces = []
for (const place of placesToTravel) {
  if (!place.id.includes("11")) {
    newToys.push(place);
  }
}

console.log(newplaces);

