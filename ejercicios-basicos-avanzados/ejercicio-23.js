const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const pelipequeña = [];
const pelimediana = [];
const peligrande = [];

for (let peli of movies) {
  if (peli.durationInMinutes < 100) {
    pelipequeña.push(peli);
  } else if (peli.durationInMinutes > 100 && peli.durationInMinutes < 200) {
    pelimediana.push(peli);
  } else if (peli.durationInMinutes > 200) {
    peligrande.push(peli);
  }
}

console.log("Peli pequeña: ", pelipequeña);
console.log("Peli mediana: ", pelimediana);
console.log("Peli grande: ", peligrande);
