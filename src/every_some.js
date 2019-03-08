var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 }
];

//16GB ramが必要なソフト
var allComputersCanRun = true;

// すべてで動かせるフラグ
var someComputersCanRun = false;

// for (var i = 0; i < computers.length; i++) {
//   var computer = computers[i];

//   if (computer.ram < 16) {
//     allComputersCanRun = false;
//   } else {
//     someComputersCanRun = true;
//   }
// }

console.log(allComputersCanRun);
console.log(someComputersCanRun);

// 論理積
var computerAll = computers.every(function(computer) {
  return computer.ram >= 16;
});

// 論理和,returnは忘れない
var computerSome = computers.some(function(computer) {
  return computer.ram >= 16;
});

console.log(computerAll);
console.log(computerSome);
