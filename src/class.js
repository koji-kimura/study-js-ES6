// 以下はES5の書き方
// function Car(options) {
//   this.title = options.title;
// }

// //ES6ではprototypeを使わないでかけるようになる
// Car.prototype.drive = function() {
//   return "ウィーン";
// };

// var car = new Car({
//   title: "プリウス"
// });

// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.costructor = Toyota;
// Toyota.prototype.hunk = function() {
//   return "ぶぶー";
// };

// const toyota = new Toyota({ color: "red", title: "アクア" });
// console.log(car);
// console.log(car.drive());
// console.log(toyota.hunk());
