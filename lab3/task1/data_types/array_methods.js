// exercise 1
// Converts dash-separated string into camelCase
function camelize(str) {
  return str
    .split('-') // split string into array by '-'
    .map((word, index) =>
      index === 0
        ? word // first word stays the same
        : word[0].toUpperCase() + word.slice(1) // capitalize others
    )
    .join(''); // join array back into a string
}

// Examples
alert(camelize("background-color")); // backgroundColor
alert(camelize("list-style-image")); // listStyleImage
alert(camelize("-webkit-transition")); // WebkitTransition

//exercise 2
// Returns a sorted copy of the array without modifying the original
function copySorted(arr) {
  return arr.slice().sort(); // slice() creates a copy
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr);    // HTML, JavaScript, CSS (unchanged)


// User objects
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// Create array of names using map
let names = users.map(user => user.name);

alert(names); // John, Pete, Mary
