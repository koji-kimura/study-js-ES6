// ツリー構造でgeneratorを使ってみる
// 再帰的にノードが関連しあっている
//掲示板のコメントに対してのコメントとか
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    // map forEachは使えない
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("賛成!!", []),
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
