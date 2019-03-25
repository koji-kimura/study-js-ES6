var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Axer", ram: 32 }
];

// 16GB ramが必要なソフト

// 全てで動かせるフラグ
var allComputersCanRun = true;

//どれかでは動かせるフラグ
var someComputersCanRun = false;

// for (var i = 0; i < computers.length; i++) {
//   var computer = computers[i];

//   if (computer.ram < 16) {
//     allComputersCanRun = false;
//   } else {
//     someComputersCanRun = true;
//   }
// }

allComputersCanRun = computers.every(computer => {
  return computer.ram > 16;
});

someComputersCanRun = computers.some(computer => {
  return computer.ram > 16;
});

console.log(allComputersCanRun);
console.log(someComputersCanRun);
