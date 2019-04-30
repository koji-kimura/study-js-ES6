// let url = "https://jsonplaceholder.typicode.com/posts/";
let url = "https://jsonplaceholder.typicode11111.com/posts/";
let x = fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  // ネットワークのリクエストが失敗した時だけcatchに入る
  .catch(error => console.log("問題発生"));
console.log(x);

// // 何もrequireしないでpromiseは使える
// // なかで待ってもらう関数を作るのね
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 3000);
// });

// //resolvedのあとはthen
// // rejectのあとはcatchが登録される

// promise
//   .then(() => console.log("処理が完了しました"))
//   .then(() => console.log("ここも"))
//   .catch(() => console.log("問題発生"));
