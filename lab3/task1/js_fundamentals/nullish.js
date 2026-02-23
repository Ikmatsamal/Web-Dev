let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// OR returns first truthy value
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

// ?? returns first defined (not null / not undefined)
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder




