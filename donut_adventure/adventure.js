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
  fight(combatant) {
    console.log(`\"i\'m ready to rumble\"`);

    let num = Math.floor(Math.random() * (this.catchPhrases.length - 0));
    let weapon = Object.keys(this.weapons)[num];
    let hp = Object.values(this.weapons)[num];

    combatant.health -= hp;

    console.log(`${combatant.name} got hit by ${weapon}! His health is ${combatant.health}!`);
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
  fight(combatant) {
    console.log(`\"i\'m gonna flatten you like a slice of pepperoni!\"`);

    let num = Math.floor(Math.random() * (this.catchPhrases.length - 0));
    let weapon = Object.keys(this.weapons)[num];
    let hp = Object.values(this.weapons)[num];

    combatant.health -= hp;

    console.log(`${combatant.name} got hit by ${weapon}! His health is ${combatant.health}!`);
  }
}

const pizzaRat = new Enemy('Pizza Rat');

//Part 3: 'walking down the street'

dougie.talkSass();
pizzaRat.talkSmack();

dougie.announceHealth();
pizzaRat.announceHealth();

//Part 4: Fight!

pizzaRat.fight(dougie);
dougie.fight(pizzaRat);
