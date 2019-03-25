// post,Comment
var posts = [{ id: 1, title: "古い投稿" }, { id: 2, title: "新しい投稿" }];

var comment = {
  postId: 2,
  content: "イイね"
};

function PostForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

let x = PostForComment(posts, comment);
console.log(x);

// function Car(model) {
//   this.model = model;
// }

// var cars = [new Car("プリウス"), new Car("ノート"), new Car("アクア")];

// let car = cars.find(car => {
//   // return を忘れない
//   return car.model === "プリウス";
// });

// console.log(car);
