// es6でいうクラスは他の言語ではclassとは違う
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return "ウィーン";
};

function Toyota(options) {
  Car.call(this.options);
  this.color = options.color;
}

// 警鐘をするには？？？
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.costructor = Toyota;

Toyota.prototype.hank = function() {
  return "ぶぶー";
};

const toyota = new Toyota({ color: "red", title: "アクア" });

var car = new Car({ title: "プリウス" });

// console.log(car.drive);
console.log(toyota);
