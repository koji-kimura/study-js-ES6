var cars = [
  { type: "軽自動車", price: "安い" },
  { type: "高級車", price: "高い" }
];

// いわゆるプラック関数
var prices = cars.map(car => {
  return car.price;
});

console.log(prices);

// var numbers = [1, 2, 3];

// var doubleNumbers = [];

// // for (var i = 0; i < numbers.length; i++) {
// //   doubleNumbers.push(numbers[i] * 2);
// // }

// var doubled = numbers.map(number => {
//   return number * 2;
// });

// console.log(doubled);

// // console.log(doubleNumbers);
