const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  let counter = 0;
  for (const element of list) {
    if (typeof element === "string") {
      counter += element.length;
    } else {
      counter += element;
    }
  }
  const average = counter / list.length;
  console.log(average);
}

averageWord(mixedElements);