// 実際にどう使えるのか？
// ツリー構造を使ってみる
// クラスを使ってインスタンス化する

// ツリー構造でgeneratorを使ってみる
// 再帰的にノードが関連しあっている
//掲示板のコメントに対してのコメントとか
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  // クラスの中のメソッドはメソッド名()
  *[Symbol.iterator]() {
    // 自分のコンテントはそのままyieldさせればいい
    yield this.content;
    // map forEachは使えない
    // 単純に子ノードをイールドするだけでは孫ノードが見つけられない
    // ジェネレータの移譲をしてあげたらいい
    for (let child of this.children) {
      yield* child;
    }
  }
}

const under_children = [
  new Comment("賛成の賛成!!", []),
  new Comment("賛成の反対!!", []),
  new Comment("賛成のうーん!!", [])
];

const children = [
  new Comment("賛成!!", under_children),
  new Comment("反対!!", []),
  new Comment("うん???!!", [])
];

const tree = new Comment("非常にいい記事です", children);

const values = [];

for (let value of tree) {
  values.push(value);
}

console.log(tree);

// // でもメンテめちゃくちゃ厄介

// // 次はジェネレーター同士をどう組み合わせられるか？
// const testingTeam = {
//   lead: "典子",
//   tester: "たかし",
//   // 動的プロパティ、キーを動的に評価できる
//   [Symbol.iterator]: function*() {
//     yield this.lead;
//     yield this.tester;
//   }
// };

// const engineerTeam = {
//   testingTeam,
//   size: 3,
//   department: "開発部",
//   lead: "太郎",
//   manager: "花子",
//   engineer: "二郎",
//   // コードをスッキリさせたい
//   [Symbol.iterator]: function*() {
//     yield this.lead;
//     yield this.manager;
//     yield this.engineer;
//     yield* this.testingTeam;
//   }
// };

// //働いている人の値を持ってきたい
// // オブジェクトの中身を思うように発生させられるのがこの機能の凄さ
// // どうやって継承するの?
// function* TeamIterator(team) {
//   yield* team.engineerTeam;

//   // 移譲のために変数を追加
//   // なんでteamの中に入っている？
//   //  もともとの構文から
//   // const testingTeamGenerator = testingTeamIterator(team.testingTeam);
//   // yieldに*をつけることで移譲することができる
//   // 何をしている？　他のgeneratorを覗きに行っている
//   // もし何か他に移譲できるものがあったら呼んでね
//   // イテレーターとは反復子って意味らしい
//   // 探して見つけたら呼び出す
// }

// function* testingTeamIterator(team) {
//   yield team.lead;
//   yield team.tester;
// }

// const names = [];

// // どうやって移譲するのか？
// // シンボルドットイテレータについて
// //　TeamIteratorを省略できるようになった
// // 配列は最初からシンボルイテレーターを実装している
// for (let name of engineerTeam) {
//   names.push(name);
// }

// console.log(names);

// // function* colors() {
// //   yield "red";
// //   yield "blue";
// //   yield "green";
// // }

// // // const gen = colors();
// // // console.log(gen.next());
// // // console.log(gen.next());
// // // console.log(gen.next());
// // // console.log(gen.next());

// // const myColors = [];

// // // doneがtrueになるまで実装するのがfor of文
// // for (let color of colors()) {
// //   myColors.push(color);
// // }

// // console.log(myColors);

// // // *を追加したら
// // function* shopping() {
// //   // 発生
// //   // 歩道を歩いてお店に行く
// //   // お店に到着したのでお金を持ってお店に入る
// //   // yieldで外に出る
// //   const stuffFormStore = yield "お金";

// //   // コインランドリーに到着、服を持って入る
// //   const cleanClothes = yield "汚れた服";

// //   // yieldは複数回呼べる

// //   // 家に歩いて帰る
// //   return [stuffFormStore, cleanClothes];
// // }

// // // お店関連の世界
// // const gen = shopping();

// // // 家から歩道に出る
// // // nextで中に入る
// // console.log(gen.next());
// // // お店で買い物をして日用品を持って歩道に出る
// // //対応はお金でnextで中に入った
// // console.log(gen.next("日用品"));
// // //対応は汚れた服
// // console.log(gen.next("綺麗な服"));

// // // console.log(numbers());

// // //ジェネレーターって何？
// // // 何回も入ったりでたりできる関数

// // // 何してくれるの？
// // // イテレーション
// // // generator同士の連携と委譲
// // // generatorとsymbol.iterator
