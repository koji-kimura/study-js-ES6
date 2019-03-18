// これでクラスを作る
class Car {
  // 分割代入
  constructor({ title }) {
    this.title = title;
  }
  // カンマは入れない
  drive() {
    return "ウィーン";
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); // carコンストラクタを呼んでいる
    this.color = options.color;
  }
  honk() {
    return "ぶぶー";
  }
}

const toyota = new Toyota({ color: "red", title: "アクア" });
console.log(toyota.honk());
console.log(toyota);
console.log(toyota.drive());

// const car = new Car({ title: "アクア" });

// console.log(car);
// console.log(car.drive());

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
