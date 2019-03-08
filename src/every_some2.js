var names = ["けん", "はなこ", "そういちろう"];

var namelengthMoreAll3 = names.every(name => {
  return name.length >= 3;
});

var namelengthMoreSome3 = names.some(name => {
  return name.length >= 3;
});

console.log(namelengthMoreAll3);
console.log(namelengthMoreSome3);
