var products = [
  { name: "きゅうり", type: "野菜", quantity: 0, price: 1 },
  { name: "バナナ", type: "フルーツ", quantity: 10, price: 15 },
  { name: "セロリ", type: "野菜", quantity: 30, price: 9 },
  { name: "オレンジ", type: "フルーツ", quantity: 3, price: 6 }
];

var filterProducts = [];

// for (var i = 0; i < products.length; i++) {
//   if (products[i].type === "フルーツ") {
//     filterProducts.push(products[i]);
//   }
// }

// 種類が野菜で量が0より多くて、値段が10より小さい
filterProducts = products.filter(product => {
  // if文で書かない
  return product.type === "野菜" && product.quantity > 0 && product.price < 10;
});

console.log(filterProducts);
