function* colors() {
  yield "red";
  yield "blue";
  yield "green";
}

const gen = colors();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

// // *を追加したら
// function* shopping() {
//   // 発生
//   // 歩道を歩いてお店に行く
//   // お店に到着したのでお金を持ってお店に入る
//   // yieldで外に出る
//   const stuffFormStore = yield "お金";

//   // コインランドリーに到着、服を持って入る
//   const cleanClothes = yield "汚れた服";

//   // yieldは複数回呼べる

//   // 家に歩いて帰る
//   return [stuffFormStore, cleanClothes];
// }

// // お店関連の世界
// const gen = shopping();

// // 家から歩道に出る
// // nextで中に入る
// console.log(gen.next());
// // お店で買い物をして日用品を持って歩道に出る
// //対応はお金でnextで中に入った
// console.log(gen.next("日用品"));
// //対応は汚れた服
// console.log(gen.next("綺麗な服"));

// // console.log(numbers());

// //ジェネレーターって何？
// // 何回も入ったりでたりできる関数

// // 何してくれるの？
// // イテレーション
// // generator同士の連携と委譲
// // generatorとsymbol.iterator
