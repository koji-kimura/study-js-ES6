const defaultColors = ["赤", "緑"];

const userFavoriteColors = ["オレンジ", "黄"];

const fallColor = ["茶色", "紅葉"];

let x = defaultColors.concat(userFavoriteColors);
let y = ["青", ...defaultColors, ...userFavoriteColors];

console.log(x);
console.log(y);

///引数は可変長演算子
function validateShoppingList(...items) {
  if (items.indexOf("牛乳") < 0) {
    // こっちはスプレット演算子
    return ["牛乳", ...items];
  }
  return items;
}

console.log(validateShoppingList("オレンジ", "パン", "牛乳"));
console.log(validateShoppingList("オレンジ", "パン"));
