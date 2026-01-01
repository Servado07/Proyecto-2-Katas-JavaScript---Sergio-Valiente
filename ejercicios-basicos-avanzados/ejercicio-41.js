function rollDice(numeroCaras) {
  const resultado = Math.floor(Math.random() * numeroCaras) + 1;
  return resultado;
}

console.log("Tirada dado de 6 caras:", rollDice(6));
console.log("Tirada dado de 6 caras:", rollDice(6));
console.log("Tirada dado de 20 caras:", rollDice(20));
