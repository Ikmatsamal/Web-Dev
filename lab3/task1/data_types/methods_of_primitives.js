// Primitive value (string)
let str = "Hello";

// JavaScript temporarily wraps the primitive into an object
// so that we can access methods and properties
str.test = 5;

// In non-strict mode:
// the wrapper object is destroyed after the operation
// so the property is lost
alert(str.test); // undefined

// In strict mode ('use strict'):
// assigning a property to a primitive causes an error
