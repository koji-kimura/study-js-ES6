// promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // 準備ができたら実行する
//     resolve();
//   }, 5000);
// });

// promise
//   .then(() => console.log("処理が完了しました"))
//   .then(() => console.log("ここも実行される"))
//   .catch(() => console.log("問題発生"));

// fetchについて
// let url = "https://jsonplaceholder.typicode.com/posts";
let url = "https://jsonplaceholder.typicode.com/posts12345";
fetch(url)
  .then(response => console.log(response))
  // catchの方に行かないのが欠点
  // ネットワークリクエストが失敗した時だけエラーになる
  .catch(error => console.log("問題発生", error));
// fetch(url)
//   // jsonって入れてあげないといけない
//   .then(response => response.json())
//   .then(data => console.log(data));
