//ex 1
// Reads two numbers and converts input to numbers using unary +
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

// Adds numbers (not strings)
alert(a + b);

//ex 2
// Reads a number until the user enters a valid numeric value
function readNumber() {
  let num;

  // Repeat until the input is a finite number
  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  // If user cancels or enters empty string, return null
  if (num === null || num === '') return null;

  // Convert the valid input to a number
  return +num;
}

// Show the result
alert(`Read: ${readNumber()}`);

//ex3
// Returns a random number between min and max (not including max)
function random(min, max) {
  // Math.random() gives a number from 0 to 1
  return min + Math.random() * (max - min);
}

// Examples of random numbers
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
