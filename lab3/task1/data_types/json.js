//ex1
// Original JavaScript object
let user = {
  name: "John Smith",
  age: 35
};

// Convert the object into a JSON string
// JSON.stringify() serializes the object
let json = JSON.stringify(user);

// Convert the JSON string back into a JavaScript object
// JSON.parse() deserializes the JSON string
let user2 = JSON.parse(json);

// user2 now contains a new object copied from user
console.log(user2);


//exercise2
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));

/*
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/