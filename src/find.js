function Car(model) {
  this.model = model;
}

var cars = [new Car("プリウス"), new Car("ノート"), new Car("アクア")];

var car_search = cars.find(car => {
  return car.model === "アクア";
});

console.log(car_search);
// var users = [{ name: "太郎" }, { name: "二郎" }, { name: "三郎" }];

// var user;

// // for (var i = 0; i < users.length; i++) {
// //   if (users[i].name === "二郎") {
// //     user = users[i];
// //     break;
// //   }
// // }

// user = users.find(function(user) {
//   return user.name === "二郎";
// });

// console.log(user);
