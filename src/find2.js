var posts = [{ id: 1, title: "古い投稿" }, { id: 2, title: "新しい投稿" }];

var comment = {
  postId: 2,
  content: "いいね"
};

function postForComment(posts, comment) {
  // returnを忘れない
  // しかも入れ子にする
  return posts.find(function(post) {
    // ===を忘れない
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));
