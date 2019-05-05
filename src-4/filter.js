var post = { id: 4, title: "初めての投稿" };

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

console.log(commentsForPost(post, comments));

// var products = [
//   { name: "きゅうり", type: "野菜", quantity: 0, price: 1 },
//   { name: "バナナ", type: "フルーツ", quantity: 10, price: 15 },
//   { name: "セロリ", type: "野菜", quantity: 30, price: 9 },
//   { name: "オレンジ", type: "フルーツ", quantity: 3, price: 5 }
// ];

// var filteredProducts = [];

// // for (var i = 0; i < products.length; i++) {
// //   if (products[i].type === "フルーツ") {
// //     filteredProducts.push(products[i].name);
// //   }
// // }

// //　種類が野菜で量が0より多くて、値段が10より小さい

// filteredProducts = products.filter(function(product) {
//   return product.type === "野菜" && product.quantity > 0 && product.price < 10;
// });

// console.log(filteredProducts);
