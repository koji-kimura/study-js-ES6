const MathLibrary = {
  // かけ算って変えたいけど無理
  // 与えられた引数をそのまま配列にして
  calculateProduct(...rest) {
    // return a * b;
    // ◯その後に展開するときに使える
    // *配列の中だけで展開するわけではないのね
    return this.multiply(...rest);
  },
  //これでもできるけど煩雑
  multiply(a, b) {
    return a * b;
  }
};

let x = MathLibrary.calculateProduct(3, 4, 5);
let y = MathLibrary.multiply(5, 4);
console.log(x);
console.log(y);

// // ...で引数を配列化
// function valodateShoppingList(...items) {
//   if (items.indexOf("牛乳") < 0) {
//     // 「...」は配列の中にあると展開されるのかね？
//     return ["牛乳", ...items];
//   }
//   return items;
// }

// let x = valodateShoppingList("オレンジ", "パン", "牛乳");
// console.log(x);
// const defaultColors = ["赤", "緑"];
// const userFavoriteColors = ["オレンジ", "黄"];
// const fallColors = ["茶", "紅葉"];

// // 従来のやり方
// // let x = defaultColors.concat(userFavoriteColors);

// // メリットは１つの文字列を流動的に入れられること
// let y = ["青", ...fallColors, ...defaultColors, ...userFavoriteColors];
// console.log(y);

// // 渡す引数を可変長にしたい時に使える
// // restは「置く」とかって意味が一番近いのかね？
// function addNumbers(...numbers) {
//   // ...を頭につけることによって'配列'にまとめて入る
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }

// let x = addNumbers(1, 2, 3, 4, 5, 6, 7);

// console.log(x);
