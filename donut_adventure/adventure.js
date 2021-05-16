//Part 1: create hero class

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 10;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    };
    this.catchPhrases = [
      'i\'m fresher than day old pizza',
      'you can\'t count my calories'
    ]
  }

  talkSass() {
    let num = Math.floor(Math.random() * (this.catchPhrases.length - 0));
    console.log(this.catchPhrases[num]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log(`i\'m ready to rumble`);
  }
}

const dougie = new Hero('Dougie the Donut');

//Part 2: create the enemy class

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    };
    this.catchPhrases = [
      'i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer'
    ]
  }

  talkSmack() {
    let num = Math.floor(Math.random() * (this.catchPhrases.length - 0));
    console.log(this.catchPhrases[num]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log(`i\'m gonna flatten you like a slice of pepperoni!`);
  }
}

const pizzaRat = new Enemy('Pizza Rat');
