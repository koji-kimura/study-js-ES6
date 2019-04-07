// ネイティブでプロミスが実装されるようになった
// その前にjsコードがどう実装されているか？
// jsにはコードをその場で止めておくことはできない。他の言語ならあるのに
//　「--してから」はthen
// っでpromiseが登場
//3つの状態「未解決」「成功」「失敗」
// promiseを作っていく
// promiseとajaxは一緒にいる必要はない
// ネイティブでプロミスが使える
// リゾルバーが定義されてないならエラーが出る
// プロミスオブジェクトを作る
// プロミスオブジェクトには3つの状態がある
// resolveとrejectならコールバック関数を呼び出せる
const promise = new Promise((resolve, reject) => {
  // resolveするとthenが呼ばれる
  //   resolve();
  setTimeout(() => {
    // resolve();
    // 成功とか失敗の処理を呼んでそのあとにコールバックを定義する
    reject();
  }, 3000);
});

// promise自体にコールバックを登録できる
promise
  .then(() => console.log("処理が完了しました"))
  .then(() => console.log("もういっちょ"))
  .catch(() => console.log("問題発生"));
// promise.catch();

//とりあえずのまとめ
// promiseで処理を塞きとめる
// せき止めた処理が失敗か成功かはresolve()かreject()で
// そのあとにthenとcatchで呼び出す
