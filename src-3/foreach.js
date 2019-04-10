// 数字の配列を用意する
var numbers = [1, 2, 3, 4, 5];

// 合計を保持する変数を用意する
var sum = 0;

// 配列の1つ1つの数字を合計に足す

// forEachの中は匿名でなくてもいい
numbers.forEach(number => {
  sum += number;
});
// 合計を表示する
console.log(sum);

// // 配列の便利メソッド
// // es5版の書き方
// var colors = ["red", "blue", "green"];

// // シンプルだけれど、情報が多すぎる
// // 読みやすいコードを書くことが重要
// // for (var i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// // こっちのが理屈がわかりやすい
// colors.forEach(color => {
//   console.log(color);
// });
