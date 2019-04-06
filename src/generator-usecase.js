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

console.log(tree);

const values = [];

for (let value of tree) {
  values.push(value);
}

console.log(values);

console.log(children);
