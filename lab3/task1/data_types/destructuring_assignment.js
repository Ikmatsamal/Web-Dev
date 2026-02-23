//exercise 1
// Original object
let user = {
  name: "John",
  years: 30
};

// Object destructuring:
// - take 'name' property into variable `name`
// - take 'years' property and rename it to `age`
// - create 'isAdmin' with default value false (because it doesn't exist in the object)
let { name, years: age, isAdmin = false } = user;

// Check the extracted values
alert(name);     // John
alert(age);      // 30
alert(isAdmin);  // false


//exercise 2
// Function that returns the name of the person with the highest salary
function topSalary(salaries) {

  // Store the maximum salary found so far
  let maxSalary = 0;

  // Store the name of the person with the maximum salary
  let maxName = null;

  // Object.entries(salaries) converts the object into [key, value] pairs
  // Destructuring is used to extract name and salary from each pair
  for (const [name, salary] of Object.entries(salaries)) {

    // If the current salary is higher than the previous maximum
    if (salary > maxSalary) {
      maxSalary = salary; // update maximum salary
      maxName = name;     // update person name
    }
  }

  // If the object was empty, maxName will stay null
  return maxName;
}

