// 何もインポートしないでも動く
// 中になんか書いておかないと
const promise = new Promise((resolve, reject) => {
  // resolve(alert(this));
  reject();
});

// 成功の時の処理
promise.then(() => {
  console.log("実行しました");
});

// 失敗の時の処理
promise.catch(() => {
  console.log("失敗しました");
});

// console.log(promise);
// promiseとajaxは一緒にいるわけではない
// jsにはコードを眠らせておく機能はない
// ノンブロッキング
// コードを止めておく動きがjsにはない
// これをいい感じにしてくれるのがpromise
// 「--きてから」は（then）
