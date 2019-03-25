var names = ["けん", "はなこ", "そういちろう"];

let namelen = names.every(name => {
  return name.length >= 3;
});

let namelen2 = names.some(name => {
  return name.length >= 3;
});

console.log(namelen);
console.log(namelen2);
