const companies = ["google", "facebook", "apple"];

// 書いた順番に変数名が追加されていく
// []なら配列、{}ならオブジェクト
// 残りを分割代入してしまう
const [name, ...rest] = companies;
// const { length } = companies;
console.log(name);
// console.log(name2);
console.log(...rest);
// console.log(length);
