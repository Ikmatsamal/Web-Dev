//ex1
// One shared object
let obj = {};

// Constructor A returns the same object
function A() {
  return obj;
}

// Constructor B returns the same object
function B() {
  return obj;
}

// Both constructors return the same reference
alert(new A() == new B()); // true

//ex2
// Calculator constructor function
function Calculator() {

  // Reads two numbers and stores them in the object
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  // Returns the sum of a and b
  this.sum = function() {
    return this.a + this.b;
  };

  // Returns the product of a and b
  this.mul = function() {
    return this.a * this.b;
  };
}

// Create a new Calculator object
let calculator = new Calculator();

// Call the read method
calculator.read();

// Use object methods
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//ex3
// Accumulator constructor
function Accumulator(startingValue) {
  // Initial value is saved in the object
  this.value = startingValue;

  // Adds user input to the current value
  this.read = function() {
    this.value += +prompt('How much to add?', 0);
  };
}

// Create accumulator with initial value
let accumulator = new Accumulator(1);

// Each call updates the same value
accumulator.read();
accumulator.read();

// Shows the accumulated result
alert(accumulator.value);
