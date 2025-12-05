//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1 Mostrar a "Tendo" por consola
console.log(aldeanos[3]);

//4.2 Colocar a "Cervasio" en el ultimo lugar del array
aldeanos.push("Cervasio");
console.log(aldeanos);

//4.3 Cambiar el primer elemento del array por "Bambina"
aldeanos[0] = "Bambina";
console.log(aldeanos);

//4.4 Dar la vuelta al array
aldeanos.reverse();
console.log(aldeanos);

//4.4.1 Devolver la tabla a su orden normal
aldeanos.reverse();

//4.5 Cambiar a "Narciso" por "Canela" usando un método de array
aldeanos.splice(1, "Canela");
console.log(aldeanos);

//4.6 Imprimir ultimo elemento del array sin atacar a su posición
console.log(aldeanos[aldeanos.length - 1]);
