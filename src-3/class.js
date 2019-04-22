class Car {
  //   constructor(options) {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "ウィーン";
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); // Carのコンストラクタ
    this.color = options.color;
  }
  hank() {
    return "ぶぶー";
  }
}

const car = new Car({ title: "アクア" });
console.log(car);
console.log(car.drive());
console.log(car.title);

const toyota = new Toyota({ color: "red", title: "アクア2" });
console.log(toyota.hank());
console.log(toyota.color);
console.log(toyota.title);

// function Car(options) {
//   this.title = options.title;
// }

// Car.prototype.drive = function() {
//   return "ウィーン";
// };

// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.consructor = Toyota;

// Toyota.prototype.hank = function() {
//   return "ぶぶー";
// };

// const toyota = new Toyota({ color: "red", title: "アクア" });

// var car = new Car({ title: "プリウス" });

// console.log(car);
// console.log(car.drive());
// console.log(toyota);
// console.log(toyota.drive());
// console.log(toyota.hank());
