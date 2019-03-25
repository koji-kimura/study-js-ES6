var primaryColor = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// previous, primaryColor

let x = primaryColor.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(x);
