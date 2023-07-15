// Make an object
const myObject = {
  property: "Value!",
  otherProperty: 77,
  propertytwo: function () {
    console.log("hi!");
  },
};

// Dot notation to do stuff with the object
myObject.propertytwo();
console.log(myObject.property);
console.log(myObject.otherProperty);

console.log("--------------------");

// Bracket notation
myObject["propertytwo"]();
console.log(myObject["property"]);
console.log(myObject["otherProperty"]);

// Object constructor 'Player'
function Player(name, marker) {
  this.name = name;
  this.marker = marker;

  this.sayName = function () {
    console.log(name);
  };
  this.sayMarker = function () {
    console.log(marker);
  };
}
const player1 = new Player("John", "X");
const player2 = new Player("Jane", "O");
player1.sayName();
player1.sayMarker();
player2.sayName();
player2.sayMarker();

// Prototypes
console.log(Object.getPrototypeOf(player1) === Player.prototype);
console.log(Object.getPrototypeOf(player2) === Player.prototype);

// Setting functions of prototypes. This carries over to the Player objects.
Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};
player1.sayHello();
player2.sayHello();

// valueOf() is inherited from the prototype.
console.log(player1.valueOf());
console.log(player1.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));

// Exercise 1... (why is copilot trying to do all my exercises for me? ><)
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());

// Prototype Inheritance
