// Function that counts the number of properties in an object
function count(obj) {
  // Object.keys(obj) returns an array of the object's own property names
  // Example: {a: 1, b: 2} -> ["a", "b"]
  
  // length gives the number of properties
  return Object.keys(obj).length;
}

// Example object
let user = {
  name: "John",
  age: 30
};

// Displays the number of properties
alert(count(user)); // 2
