//exercise 1
// Extracts numeric value from a currency string like "$120"
function extractCurrencyValue(str) {
  // slice(1) removes the first character ('$')
  // unary + converts the string to a number
  return +str.slice(1);
}

// Example
alert(extractCurrencyValue('$120') === 120); // true

//exercise 2
// Truncates a string if it exceeds the maximum length
function truncate(str, maxlength) {
  // If the string is too long, cut it and add ellipsis
  return (str.length > maxlength)
    ? str.slice(0, maxlength - 1) + '…'
    : str;
}

// Examples
alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20));

