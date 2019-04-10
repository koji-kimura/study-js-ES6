// let url = "https://jsonplaceholder.typicode.com/posts";
// これでは問題は発生しない
//let url = "https://jsonplaceholder.typicode.com/posts1234";

//ネットワークに問題があるのでこれならcatchの方に行く
let url = "https://jsonplaceholder1234.typicode.com/posts1234";
// リクエストを投げた状態
// console.log(fetch(url));

// thenで成功した状態を見てみる
// リクエストしたデータそのものが入っているわけではない
// なのでdata.jsonってメソッドを呼ばないといけない

// fetch(url).then(data => console.log(data);
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log("問題発生！！", error));

// 問題発生のコンソールログが出てない、catchに入ってない
// 異常なステータスコードでもcatchにはいかない
