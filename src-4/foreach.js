// まずは数字の配列を用意する
var numbers = [1, 2, 3, 4, 5];

// 合計を保持する変数を用意する
var sum = 0;

// 配列の１つ１つの数字を合計に足す
numbers.forEach(function(number) {
  sum += number;
});

// 合計を表示する
console.log(sum);

// var colors = ["red", "blue", "green"];

// // for (var i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// colors.forEach(function(color) {
//   console.log(color);
// });
