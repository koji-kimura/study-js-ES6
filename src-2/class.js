// これでクラスを作る
class Car {
  //分割代入、初期化はコンストラクタ
  constructor({ title }) {
    this.title = title;
  }
  // カンマは不要
  drive() {
    return "ウィーン";
  }
}
// これでインスタンスを作る
const car = new Car({ title: "アクア" });
console.log(car.drive());
console.log(car);

//継承するには？ extends
class Toyota extends Car {
  //コンストラクタで分割代入はあまりいいプラクティスではない
  constructor(options) {
    // 継承にはcarを使う
    super(options); // carのコンストラクタ
    this.color = options.color;
  }
  hank() {
    return "ぶぶー";
  }
}

const toyota = new Toyota({ color: "red", title: "アクア" });

console.log(toyota.hank());
console.log(toyota);

// // es6でいうクラスは他の言語ではclassとは違う
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

// // 警鐘をするには？？？
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.costructor = Toyota;

// Toyota.prototype.hank = function() {
//   return "ぶぶー";
// };

// const toyota = new Toyota({ color: "red", title: "アクア" });

// var car = new Car({ title: "プリウス" });

// // console.log(car.drive);
// console.log(toyota.drive());
// console.log(toyota.hank());
