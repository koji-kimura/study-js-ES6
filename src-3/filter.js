var post = { id: 4, title: "初めての投稿" };
var comments = [
  { postId: 4, content: "いい記事ですね" },
  { postId: 3, content: "勉強になりました" },
  { postId: 4, content: "なるほど" }
];

function commentsForPost(post, comments) {
  return comments.filter(comment => {
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

// let filteredProducts = [];

// // 種類が野菜　量が0より多い、値段が10より小さい
// // 分割代入もキメてみた
// filteredProducts = products.filter(({ name, type, quantity, price }) => {
//   return type === "野菜" && quantity > 0 && price > 0;
// });
// // for (let i = 0; i < products.length; i++) {
// //   if (products[i].type === "フルーツ") {
// //     filteredProducts.push(products[i]);
// //   }
// // }

// console.log(filteredProducts);
