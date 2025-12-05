const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
];
function repeatCounter(list) {
  const count = {};

  for (const word of list) {
    
    if (count[word]) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
  }
  return count;
}

console.log(repeatCounter(words));