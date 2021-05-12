// task 1: create Hamster class
class Hamster {
  constructor(name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  };

  wheelRun() {
    console.log('squeak squeak');
  };
  eatFood() {
    console.log('nibble nibble');
  };
  getPrice() {
    return this.price;
  };
};

// task 2: create Person class
class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet(name) {
    console.log(`Hello ${name}`);
  }
  eat(num) {
    this.weight+=num;
    this.mood+=num;
  }
  exercise(num) {
    this.weight-=num;
  }
  ageUp(num) {
    this.age+=num;
    this.height+=num;
    this.weight+=num;
    this.mood-=num;
    this.bankAccount+=(10*num);
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood+=10;
    this.bankAccount-=hamster.getPrice();
  }
}

// task 3: create a story with your person class

// Instantiate a new Person named Timmy
const timmy = new Person('Timmy');

// Age Timmy five years
timmy.ageUp(5);

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat(5);

// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise(5);

// Age Timmy 9 years
timmy.ageUp(9);

// Create a hamster named "Gus"
const gus = new Hamster('Gus');

// Set Gus's owner to the string "Timmy"
gus.owner = 'Timmy';

// Have Timmy "buy" Gus
timmy.buyHamster(gus);

// Age Timmy 15 years
timmy.ageUp(15);

// Have Timmy eat twice
timmy.eat(2);

// Have Timmy exercise twice
timmy.exercise(2);
