function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("my_username");
var password = new Field("my_password");

var fields = [username, password];

var formIsValid = fields.every(field => {
  return field.validate();
});
if (formIsValid) {
  //サーバーにリクエストを投げる
} else {
  //エラーを投げる
}

console.log(formIsValid);
// console.log(username.validate() && password.validate());

// var names = ["けん", "はなこ", "そういちろう"];

// let AllOver3 = names.every(name => {
//   return name.length >= 3;
// });

// let SomeOver3 = names.some(name => {
//   return name.length >= 3;
// });

// console.log(AllOver3);
// console.log(SomeOver3);

// var computers = [
//   { name: "Apple", ram: 24 },
//   { name: "Compaq", ram: 4 },
//   { name: "Acer", ram: 32 }
// ];

// //16GBが必要なソフト

// // 全てで動かせるフラグ
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

// // console.log(allComputersCanRun);

// let Allcom = computers.every(computer => {
//   return computer.ram > 16;
// });

// let Somecom = computers.some(computer => {
//   return computer.ram > 16;
// });

// console.log(Allcom);
// console.log(Somecom);
