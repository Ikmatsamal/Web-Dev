//ex 1
// Create an array with initial values
let styles = ["Jazz", "Blues"];

// Add an element to the end of the array
styles.push("Rock-n-Roll");

// Replace the middle element with "Classics"
// Works for arrays with odd length
let middleIndex = Math.floor((styles.length - 1) / 2);
styles[middleIndex] = "Classics";

// Remove the first element and show it
alert(styles.shift()); // Jazz

// Add elements to the beginning of the array
styles.unshift("Rap", "Reggae");

// Final array:
// ["Rap", "Reggae", "Classics", "Rock-n-Roll"]



//exercise 2
let arr = ["a", "b"];

// Add a function as an element of the array
arr.push(function () {
  // "this" refers to the object before the dot
  alert(this);
});

// Call the function stored at index 2
arr[2]();
