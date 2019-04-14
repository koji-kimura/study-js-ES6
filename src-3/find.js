// post,comment

var posts = [{ id: 1, title: "古い投稿" }, { id: 2, title: "新しい投稿" }];

var comment = { postId: 2, content: "いいね" };

// returnの入れ子がむずい
function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

let x = postForComment(posts, comment);
console.log(x);

// function Car(model) {
//   this.model = model;
// }

// var cars = [new Car("プリウス"), new Car("ノート"), new Car("アクア")];

// // return忘れがちなので本当に注意
// let x = cars.find(car => {
//   return car.model === "プリウス";
// });

// console.log(x);
// var users = [{ name: "太郎" }, { name: "二郎" }, { name: "三郎" }];

// var user;

// // 最初に見つかった時点で終了する
// user = users.find(user => {
//   return user.name === "二郎";
// });
// // for (var i = 0; i < users.length; i++) {
// //   if (users[i].name === "二郎") {
// //     user = users[i];
// //     break;
// //   }
// // }

// console.log(user);
