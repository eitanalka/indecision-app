// arguments object - no longer bound wiht arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}
console.log(add(55, 1, 1001));

// this keyword - no longer bond 

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has live in ' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

