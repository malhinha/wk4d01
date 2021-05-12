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
