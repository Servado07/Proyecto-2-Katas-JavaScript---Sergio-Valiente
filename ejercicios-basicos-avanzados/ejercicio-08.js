//Mostrar la palabra más larga de este array

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(avengers) {
  let longestWord = "";
  for (const string of avengers) {
    if (string.length > longestWord.length) {
      longestWord = string;
    }
  }
  console.log(longestWord);
}

findLongestWord(avengers);