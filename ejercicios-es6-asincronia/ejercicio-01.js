console.log("1.1")

const game = {
  title: 'The Last of Us 2',
  gender: ['action', 'zombie', 'survival'],
  year: 2020
};

const { title, gender, year } = game;
console.log(title, gender, year);

console.log("1.2")

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

console.log("1.3")

const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' };
};

const { name: animalName, race } = animalFunction();
console.log(animalName, race);

console.log("1.4")

const car = { marca: 'Mazda 6', itv: [2015, 2011, 2020] };

const { marca, itv } = car;
const [year1, year2, year3] = itv;

console.log(marca, itv);
console.log(year1, year2, year3);