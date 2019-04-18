const MathLibrary = {
  calculateProduct(a, b) {
    return this.multiply(a, b);
    // return a * b;
  },
  multiply(a, b) {
    return a * b;
    // return this.calculateProduct(a, b);
  }
};

console.log(MathLibrary.calculateProduct(2, 3));
console.log(MathLibrary.multiply(2, 3));

// // 牛乳を必ず加えたい時
// // まず渡ってきた引数を配列にするためにrest演算子を使う
// function validateShoppingList(...items) {
//   // 引数を配列にしたものの中に牛乳が歩かないか？をindexOfで見ている
//   if (items.indexOf("牛乳") < 0) {
//     return ["牛乳", ...items];
//   }
//   return [...items];
// }

// let x = validateShoppingList("オレンジ", "パン");

// console.log(x);

// // const defaultColors = ["赤", "緑"];
// // const userFavoriteColors = ["オレンジ", "黄"];
// // const fallColors = ["茶", "もみじ"];

// // // let x = defaultColors.concat(userFavoriteColors);
// // // 配列を展開してくれる
// // let x = ["青", ...fallColors, ...defaultColors, ...userFavoriteColors];

// // console.log(x);

// // // // 渡す引数を可変長にしたい時
// // // function addNumbers(...numbers) {
// // //   // 入ってきたものを配列にできる
// // //   return numbers.reduce((sum, number) => {
// // //     return sum + number;
// // //   }, 0);
// // // }

// // // let x = addNumbers(1, 2, 3, 4, 5, 6, 7, 8);

// // // console.log(x);
