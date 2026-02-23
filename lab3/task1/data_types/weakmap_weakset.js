//exercise 1
// Array of message objects (managed by external code)
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// WeakSet to store read messages
// Stores object references only
let readMessages = new WeakSet();

// Mark some messages as read
readMessages.add(messages[0]);
readMessages.add(messages[1]);

// Checking if a message was read
alert(readMessages.has(messages[0])); // true
alert(readMessages.has(messages[2])); // false

// Remove the first message from the array
messages.shift();


//exercise 2
// When a message object is removed and has no references,
// it will be automatically removed from WeakSet by garbage collector

/*
// Array of message objects (managed by external code)
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// WeakMap to store read dates for messages
// key -  message object
// value - Date when the message was read
let readMap = new WeakMap();

// Mark the first message as read and store the date
readMap.set(messages[0], new Date());

// Check when the message was read
alert(readMap.get(messages[0])); // Date object

// Remove a message from the array
messages.shift();

// When the message object is removed and garbage collected,
// its entry in WeakMap is removed automatically
*/