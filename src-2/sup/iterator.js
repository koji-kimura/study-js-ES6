// jsでイテラブルなオブジェクトはすでに用意されている
// イテラブルなオブジェクト
// 配列そのものがイテラブルなオブジェクト
var obj = ["A", "B", "C"];
// 本当にイテラブルなのかを確認
var iterator = obj[Symbol.iterator]();
console.log(typeof iterator);

// 配列にはキーがあり、これは配列のキーを順番に取り出すイテレータを取得できる
// for (let v of obj) console.log(v);
// for (let v of obj.keys()) console.log(v);
// // entriesで値がセットになった配列を取り出すイテレータを取得できる
// for (let v of obj.entries()) console.log(v);

//文字列もイテラブルなオブジェクト
var str = "あいう";
var iterator = str[Symbol.iterator]();
console.log(typeof iterator);
for (var v of str) console.log(v);

//ジェネレータもまた1つのオブジェクト
function* gfn(n) {
  while (n < 100) {
    yield n;
    n *= 2;
  }
}
var gen = gfn(3);
for (let v of gen) console.log(v);

// 配列がイテラブルなオブジェクトかどうかの確認

// // https://qiita.com/kura07/items/cf168a7ea20e8c2554c6を参考に
// // 単なるオブジェクト宣言？

// //イテレーターから相対を順番に取り出す
// // オブジェクトを作成
// let obj = {};

// // Symbolは型の一種。オブジェクトのプロパティ識別子として使われる
// obj[Symbol.iterator] = function() {
//   var iterator = {}; // イテレータ
//   var count = 1;
//   iterator.next = function() {
//     let iteratorResult =
//       count <= 10
//         ? { value: count++, done: false }
//         : { value: undefined, done: true };
//     return iteratorResult;
//   };
//   return iterator;
// };

// // もっと簡単に値を取り出す方法がforof文

// for (let v of obj) {
//   console.log(v);
// }

// // let iterator = obj[Symbol.iterator](); // イテラブルなオブジェクトからイテレータを取得する
// // let iteratorResult;
// // while (true) {
// //   iteratorResult = iterator.next(); // 順番に値を取り出す
// //   if (iteratorResult.done) break;
// //   console.log(iteratorResult.value);
// // }
