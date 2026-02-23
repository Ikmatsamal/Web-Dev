// Calculator object with basic operations
let calculator = {
  // Returns the sum of a and b
  sum() {
    return this.a + this.b;
  },

  // Returns the product of a and b
  mul() {
    return this.a * this.b;
  },

  // Reads two numbers from the user
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

// Use the calculator
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// Ladder object with method chaining
let ladder = {
  step: 0,

  // Increases the step
  up() {
    this.step++;
    return this; // enables chaining
  },

  // Decreases the step
  down() {
    this.step--;
    return this; // enables chaining
  },

  // Shows the current step
  showStep() {
    alert(this.step);
    return this; // enables chaining
  }
};

// Method chaining example
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
