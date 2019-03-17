// 元データ
const points = [[4, 5], [10, 1], [0, 40]];

// ほしい情報
// [{ x: 4, y: 5 }];

// 引数でいきなり分割代入
let ans = points.map(([x, y]) => {
  // オブジェクトリテラルで省略できる
  return { x, y };
  // const x = point[0];
  // const y = point[1];
});

console.log(ans);

// use case1
// // 分割代入
// function signup({ username, password, email, birthday, city }) {
//   // ここでユーザーを作成してDBに保存する
// }

// const user = {
//   username: "myusername",
//   password: "mypassword",
//   email: "mypassword",
//   birthday: "1990/1/1",
//   city: "東京"
// };

// // 引数がスッキリする
// // 使う時に順番を気にしなくていい
// signup(user);
