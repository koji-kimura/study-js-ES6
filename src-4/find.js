var posts = [{ id: 1, title: "古い投稿" }, { id: 2, title: "新しい投稿" }];

var comment = { postId: 2, content: "いいね" };

function postForComment(posts, comment) {
  return posts.find(post => {
    return post.id === comment.postId;
  });
}

let com = postForComment(posts, comment);

console.log(com);

// function Car(model) {
//   this.model = model;
// }

// var cars = [new Car("プリウス"), new Car("ノート"), new Car("アクア")];

// let car = cars.find(car => {
//   return car.model === "アクア";
// });

// console.log(car);
// var users = [{ name: "太郎" }, { name: "二郎" }, { name: "三郎" }];

// let user = users.find(user => {
//   return user.name === "二郎";
// });

// // var user;

// // for (let i = 0; i < users.length; i++) {
// //   if (users[i].name === "二郎") {
// //     user = users[i];
// //     break;
// //   }
// // }

// console.log(user);
