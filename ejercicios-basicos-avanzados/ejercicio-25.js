const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

const peliantigua = [];
const pelinueva = [];

for (let peli of movies) {
  if (peli.releaseYear <= 2000) {
    peliantigua.push(peli);
  } else if (peli.releaseYear >= 2000) {
    pelinueva.push(peli);
  }
}

console.log("Películas antes de los 2000: ", peliantigua.length);
console.log("Películas después de los 2000: ", pelinueva.length);
