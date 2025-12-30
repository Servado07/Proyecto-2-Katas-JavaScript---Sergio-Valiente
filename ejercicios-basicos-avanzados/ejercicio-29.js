const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

const pelisPorDecada = {};

for (let peli of starWarsMovies) {
  let decada;
  if (peli.releaseYear < 1980) {
    decada = "70s";
  } else if (peli.releaseYear < 1990) {
    decada = "80s";
  } else if (peli.releaseYear < 2000) {
    decada = "90s";
  } else if (peli.releaseYear < 2010) {
    decada = "2000s";
  } else {
    decada = "2010s";
  }

  if (!pelisPorDecada[decada]) {
    pelisPorDecada[decada] = [];
  }

  pelisPorDecada[decada].push(peli);
}

console.log(pelisPorDecada);
