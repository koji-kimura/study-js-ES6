var post = { id: 4, title: "はじめての投稿" };

var comments = [
  { postId: 4, content: "いい記事ですね" },
  { postId: 3, content: "勉強になりました" },
  { postId: 4, content: "なるほど" }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

var result = commentsForPost(post, comments);

console.log(result);
