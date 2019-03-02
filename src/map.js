var numbers = [1, 2, 3];

// すでにあるデータは変えないようにする
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(number => {
  //returnを忘れない
  return number * 2;
});

console.log(doubledNumbers);
console.log(doubled);

// 以下途中処理
var cars = [
  { type: "軽自動車", price: "安い" },
  { type: "高級車", price: "高い" }
];
