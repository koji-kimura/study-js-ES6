var names = ["けん", "はなこ", "そういちろう"];

let x = names.every(function(name) {
  return name.length >= 3;
});

let y = names.some(function(name) {
  return name.length >= 3;
});

console.log(x);
console.log(y);

// var computers = [
//   { name: "Apple", ram: 24 },
//   { name: "Compaq", ram: 4 },
//   { name: "Acer", ram: 32 }
// ];

// //16GB rqamが必要なソフト

// // すべてで動かせるフラグ
// var allComputersCanRun = true;

// // どれかでは動かせるフラグ
// var someComputersCanRun = false;

// // for (var i = 0; i < computers.length; i++) {
// //   var computer = computers[i];

// //   if (computer.ram < 16) {
// //     allComputersCanRun = false;
// //   } else {
// //     someComputersCanRun = true;
// //   }
// // }

// allComputersCanRun = computers.every(computer => {
//   return computer.ram >= 16;
// });

// someComputersCanRun = computers.some(computer => {
//   return computer.ram >= 16;
// });

// console.log(allComputersCanRun);
// console.log(someComputersCanRun);
