const points = [[4, 5], [10, 5], [0, 5]];

// 配列の中をobjectでもっておきたい
// どうやってやればいいのか？
points.map(([x, y]) => {
  return { x, y };
  //   const [x, y] = point;
  //   const x = point[0];
  //   const y = point[1];
});

// // 分割代入は抽出するので順番変えてもいい
// function signup({ username, password, email, brithday, city }) {
//   // ここでユーザーを作成してDBに保存する
// }

// signup("myusername", "mypassword");

// // const Google = {
// //   locations: ["マウンテンビュー", "ニューヨーク", "ロンドン"]
// // };

// // const {
// //   locations: [first]
// // } = Google;

// // console.log(first);
// // // const companies = [
// // //   { name: "google", location: "マウンテンビュー" },
// // //   { name: "facebook", location: "メンロパーク" },
// // //   { name: "uber", location: "サンフランシスコ" }
// // // ];

// // // // 1個目のロケーション
// // // const [{ location }] = companies;

// // // console.log(location);

// // // // // 配列の分割代入
// // // // const companies = ["Google", "Facebook", "Uber"];
// // // // // 配列から要素を抽出する、配列の場合は[]

// // // // //最初の要素を抽出するのもこれでできる
// // // // const [name1, name2, name3] = companies;
// // // // // 残りを入れておく方法としてrest演算子が使える
// // // // const [name, ...others] = companies;

// // // // // 配列だからlengthは抽出できる
// // // // const { length } = companies;

// // // // console.log(name);
// // // // console.log(others);

// // // // console.log(name1);
// // // // console.log(name2);
// // // // console.log(name3);
// // // // console.log(length);

// // // // // var savedFile = {
// // // // //   extention: "jpg",
// // // // //   name: "profile",
// // // // //   size: 14040
// // // // // };

// // // // // // 第二引数で分割代入をする
// // // // // function fileSummary({ name, extention, size }, { username }) {
// // // // //   return `${username}の${name}.${extention}の容量は${size}です`;
// // // // // }

// // // // // // function fileSummary(file) {
// // // // // //   return `${file.name}.${file.extention}の容量は${file.size}です`;
// // // // // // }

// // // // // console.log(fileSummary(savedFile, { username: "ken" }));

// // // // // // var expense = {
// // // // // //   type: "交際費",
// // // // // //   amount: "4500JPY"
// // // // // // };

// // // // // // // var type = expense.type;
// // // // // // // var amount = expense.amount;

// // // // // // // ES6
// // // // // // // オブジェクトを抽出することができる
// // // // // // // 同じ名前じゃないと
// // // // // // // キーバリューでもかける
// // // // // // // ないものあったら、undefinedになる
// // // // // // const { type, amount } = expense;

// // // // // // console.log(type);
// // // // // // console.log(amount);
