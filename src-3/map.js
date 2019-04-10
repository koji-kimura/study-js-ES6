var cars = [
  { type: "軽自動車", price: "安い" },
  { type: "高級車", price: "高い" }
];

var price = cars.map(car => {
  return car.price;
});

console.log(price);

// var numbers = [1, 2, 3];

// var doubleNumbers = [];

// //

// var doubled = numbers.map(number => {
//   // returnを忘れない
//   return number * 2;
// });

// console.log(doubleNumbers);
// console.log(doubled);
