const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(listaDeStrings) {
  const uniques = [];
  for (const element of listaDeStrings) {
    if (!uniques.includes(element)) {
      uniques.push(element);
    }
  }
  console.log(uniques);
}

removeDuplicates(duplicates);