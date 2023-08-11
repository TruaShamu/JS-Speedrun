// Factory function - note that factory functions cannot use prototype methods
const personFactory = (name, age) => {
  const sayHello = () => console.log("hello!");
  return { name, age, sayHello };
};

const jeff = personFactory("jeff", 27);
console.log(jeff.name);
jeff.sayHello();

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";
// Printing the values
console.log(name, color, number, food);

// Conversion to object and print
console.log({ name, color, number, food });

let a = 17;

const func = (x) => {
  let a = x;
};

func(99);

// Result is 17 -- the scope of a is limited to func.
console.log(a);

const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    // uh oh
  };
  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

const jimmie = Player("jim", 10);
const badGuy = Player("jeff", 5);
jimmie.attack(badGuy);
console.log(jimmie.getLevel());
console.log(jimmie.health);

const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

/*const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const { sayName } = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return { sayName, doSomethingNerdy };
};*/

/*const x = Nerd("jeff");

x.sayName(); // my name is jeff
x.doSomethingNerdy(); // nerd stuff

const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return Object.assign({}, prototype, { doSomethingNerdy });
};
*/
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

console.log(calculator.add(3,5)); // 8
console.log(calculator.sub(6,2)); // 4
console.log(calculator.mul(14,5534)); // 77476