const enginieeringTeam = {
  size: 3,
  department: "開発部",
  lead: "太郎",
  manager: "花子",
  engineer: "二郎"
};

//社員名だけ見たい
// どうやってみる？　generetor
function* TeamIterator(team) {
  // yeildは算出の意味
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for (let name of TeamIterator(enginieeringTeam)) {
  names.push(name);
}

console.log(names);

// どんなオブジェクトも見れるようになる
// function* colors() {
//   yield "red";
//   yield "blue";
//   yield "green";
// }

// // const gen = colors();
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());

// const myColors = [];
// // for ofと相性がいい
// for (let color of colors()) {
//   myColors.push(color);
// }
// console.log(myColors);

// // ジェネレーターって何？
// // 何回も入ったりでたりする関数

// // *でジェネレーターになる
// function* shopping() {
//   // 歩道を歩いていた

//   // 歩道を歩いてお店に行く

//   // お店に到着したのでお金を持ってお店に入る
//   // キーワードはyield 複数回呼べる
//   const stuffFormStore = yield "お金";

//   // コインランドリーに到着したので服を持って入る
//   const creanClothes = yield "汚れた服";

//   // 家に歩いて帰る
//   return [stuffFormStore, creanClothes];
// }

// const gen = shopping();

// console.log(gen.next()); // 家から歩道に出る
// console.log(gen.next("日用品")); // お店で買い物を持って歩道に出る
// console.log(gen.next("綺麗な服")); // お店で買い物を持って歩道に出る

// // 歩いてお店に行く
// // お店に入る（お金を持って）
// // お店で買い物（中の世界）
// // お店から戻ってきた（日用品を持って）
// // 歩いて家に戻る
