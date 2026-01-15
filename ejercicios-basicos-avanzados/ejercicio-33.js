const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  const capital = capitals[country];

  if (capital) {
    return capital;
  } else {
    return "Este país no está en la lista";
  }
}

console.log(getCapital("Spain"));
console.log(getCapital("USA"));
