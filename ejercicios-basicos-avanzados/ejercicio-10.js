const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  const sumaTotal = numberList.reduce((a, b) => a + b, 0);
  return sumaTotal / numberList.length;
}

console.log(average(numbers));

