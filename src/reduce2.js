var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

var colorArr = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(colorArr);
