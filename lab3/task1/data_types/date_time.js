//exercise 1
// Function that returns the weekday in short format
function getWeekDay(date) {

  // Array of weekday names
  // getDay() returns a number from 0 (Sunday) to 6 (Saturday)
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  // Use the number from getDay() as an index
  return days[date.getDay()];
}

// Create a Date object (year, month, day)
// Month is zero-based: 0 = January, 1 = February, etc.
let date = new Date(2012, 1, 20); // Feb 20, 2012

// Show the weekday using alert
alert(getWeekDay(date)); // MO


//exercise 2
//new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );


//ex 3
// Function that returns the last day of a given month
function getLastDayOfMonth(year, month) {

  // Create a date for the first day of the NEXT month
  let date = new Date(year, month + 1, 0);

  // getDate() returns the day of the month (1–31)
  return date.getDate();
}

// Examples
alert(getLastDayOfMonth(2012, 0)); // 31 (January)
alert(getLastDayOfMonth(2012, 1)); // 29 (February, leap year)
alert(getLastDayOfMonth(2013, 1)); // 28 (February, non-leap year)
