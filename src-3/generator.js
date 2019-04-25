const testingTeam = {
  lead: "のりこ",
  teaster: "たかし",
  [Symbol.iterator]: function*() {
    yield this.lead;
    yield this.teaster;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "開発部",
  lead: "太郎",
  manager: "花子",
  engineer: "二郎"
};

// generatorを使うことで、オブジェクトの中身を自分の思うように使うことができる
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  //   const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeam;
}

function* testingTeamIterator(team) {
  yield team.lead;
  yield team.teaster;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

console.log(names);

// function* colors() {
//   yield "red";
//   yield "blue";
//   yield "green";
// }

// const myColors = [];
// const gen = colors();
// for (let color of colors()) {
//   myColors.push(color);
// }

// console.log(myColors);
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());
// // console.log(gen.next());

// // function* shopping() {
// //   // 歩道

// //   // 歩道を歩いてお店に行く

// //   // お店に到着したのでお金をもってお店に入る
// //   const stuffFromStore = yield "お金";

// //   // コインランドリーに到着したので服を持って入る
// //   const cleanClothes = yield "汚れた服";

// //   // 家に歩いて帰る
// //   return [stuffFromStore, cleanClothes];
// // }

// // // お店関連の世界
// // const gen = shopping();
// // console.log(gen.next()); // 家から歩道に出る

// // console.log(gen.next("日用品")); // お店で買い物をして日用品を持って歩道に出る
// // console.log(gen.next("綺麗な服")); // お店で買い物をして綺麗な服を持って歩道に出る

// // // console.log(numbers());
