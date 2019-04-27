// どうやってgeneratorを使ってイテレートすればいいのか？
// イテレートってループすること
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    // generatorの中ではmapは使えない。for ofを使う
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("賛成", []),
  new Comment("反対", []),
  new Comment("うーん？？", [])
];

const tree = new Comment("非常にいい記事です", children);

const values = [];

for (let value of tree) {
  values.push(value);
}

console.log(values);
// console.log(tree);

// // generator って何？
// // 発生させるもの
// // 何を発生させるもの？
// // オブジェクトから新しい要素を
// // symbol.iteratorって何？
// // ユニークにさせるためのキーだったはず
// // 配列はsymbol.iteratorを最初から実装している

// const testingTeam = {
//   lead: "のりこ",
//   teaster: "たかし",
//   // 動的なプロパティ
//   [Symbol.iterator]: function*() {
//     yield this.lead;
//     yield this.teaster;
//   }
// };

// const engineeringTeam = {
//   testingTeam,
//   size: 3,
//   department: "開発部",
//   lead: "太郎",
//   manager: "花子",
//   engineer: "二郎",
//   [Symbol.iterator]: function*() {
//     yield this.lead;
//     yield this.manager;
//     yield this.engineer;
//     //   const testingTeamGenerator = testingTeamIterator(team.testingTeam);
//     yield* testingTeam;
//   }
// };

// const names = [];
// for (let name of engineeringTeam) {
//   names.push(name);
// }

// console.log(names);

// // function* colors() {
// //   yield "red";
// //   yield "blue";
// //   yield "green";
// // }

// // const myColors = [];
// // const gen = colors();
// // for (let color of colors()) {
// //   myColors.push(color);
// // }

// // console.log(myColors);
// // // console.log(gen.next());
// // // console.log(gen.next());
// // // console.log(gen.next());
// // // console.log(gen.next());

// // // function* shopping() {
// // //   // 歩道

// // //   // 歩道を歩いてお店に行く

// // //   // お店に到着したのでお金をもってお店に入る
// // //   const stuffFromStore = yield "お金";

// // //   // コインランドリーに到着したので服を持って入る
// // //   const cleanClothes = yield "汚れた服";

// // //   // 家に歩いて帰る
// // //   return [stuffFromStore, cleanClothes];
// // // }

// // // // お店関連の世界
// // // const gen = shopping();
// // // console.log(gen.next()); // 家から歩道に出る

// // // console.log(gen.next("日用品")); // お店で買い物をして日用品を持って歩道に出る
// // // console.log(gen.next("綺麗な服")); // お店で買い物をして綺麗な服を持って歩道に出る

// // // // console.log(numbers());
