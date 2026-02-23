// Checks whether an object is empty
function isEmpty(obj) {
  // If the loop starts, the object has at least one property
  for (let key in obj) {
    return false;
  }
  // No properties found
  return true;
}

// Example object with salaries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

// Calculate the sum of all salaries
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

// Output the result
alert(sum); // 390

// Multiplies all numeric properties by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    // Check if the property value is a number
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}
