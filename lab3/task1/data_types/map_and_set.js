//exercise 1
// Returns a new array with unique values
function unique(arr) {
  // Set stores only unique values
  // Array.from converts Set back into an array
  return Array.from(new Set(arr));
}

// Example
let values = [
  "Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare, Krishna, :-O

//ex 2
let map = new Map();

// Add key-value pair
map.set("name", "John");

// map.keys() returns an iterable, not an array
let keys = Array.from(map.keys());

// Now array methods work
keys.push("more");

alert(keys); // name, more
