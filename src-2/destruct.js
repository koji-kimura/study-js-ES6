const points = [[4, 5], [10, 1], [0, 50]];

// 上の情報にxとyってキー情報を追加する

// 分割代入法について
// 引数を分割代入
let map = points.map(([ido, keido]) => {
  // それをオブジェクトリテラルで省略形で記載する
  return { ido, keido };
});

console.log(map);

//まずはマップを使う
// let x = points.map(([x, y]) => {
//   // const x = point[0];
//   // const y = point[1];
//   return { x, y };
// });

// console.log(x);

// // コードがスッキリした他に順不同にできる
// function signup({ username, password, email, birthday, city }) {
//   //ここでユーザーを作成してDBに保存する
// }

// // 引数をオブジェクト化する
// const user = {
//   username: "myusername",
//   password: "mypassword",
//   email: "test@aa.jp",
//   birthday: "1990/1/1",
//   city: "東京"
// };

// signup(user);
// signup("myusername", "mypassword", "test@aa.jp", "1990/1/1", "東京");

// const google = {
//   locations: ["マウンテンビュー", "ニューヨーク", "ロンドン"]
// };

// const {
//   //新しく名前をつけた
//   locations: [first]
// } = google;

// console.log(first);

// // 組み合わせた使い方
// const companies = [
//   { name: "goole", location: "マウンテンビュー" },
//   { name: "facebook", location: "メンロパーク" },
//   { name: "Uber", location: "サンフランシスコ" }
// ];

// // const location = companies[0].location;
// //[]で最初のロケーションを抽出
// //{}でキーがマッチしたものを抽出している
// const [{ location }] = companies;

// console.log(location);

//  配列で要素を追加できる
// const companies = ["google", "facebook", "uber"];
// // 要素ごとに値を持ってこれる
// // 大括弧か中括弧かでオブジェクトか、配列かを抽出できる
// // const [name, name2, name3] = companies;
// // rest演算子を使える
// const [name, name2, ...rest] = companies;

// console.log(name);
// console.log(name2);
// console.log(rest);

// 関数の引数でも使える
// var savedFile = {
//   extension: "jpg",
//   name: "profile",
//   size: 14040
// };

// // 分割代入は引数でもできるっていうのがこの講義の話
// function filesummary({ extension, name, size }, { username }) {
//   // function filesummary(file) {
//   //   return `${file.name}.${file.extension}の容量は${file.size}です`;
//   return `${username}:${name}.${extension}の容量は${size}です`;
// }

// // 分割以外に値を挿入する話
// console.log(filesummary(savedFile, { username: "ken" }));

// var expense = {
//   type: "交際費",
//   amount: "4500JPY"
// };

// // var type = expense.type;
// // var amount = expense.amount;

// // ES6
// // 抽出する
// // キー名を同じにする必要がある
// const { type, amount } = expense;
// // const { type } = expense;
// // const { amount } = expense;

// console.log(type);
// console.log(amount);
