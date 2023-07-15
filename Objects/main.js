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
    this.name = name
    this.marker = marker
}