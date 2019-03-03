var products = [
  { name: "きゅうり", type: "野菜" },
  { name: "バナナ", type: "フルーツ" },
  { name: "セロリ", type: "野菜" },
  { name: "オレンジ", type: "フルーツ" }
];

var filteredProducts = [];

// for (var i = 0; i < products.length; i++) {
//   if (products.type === "フルーツ") {
//     filteredProducts.push(products[i]);
//   }
// }

// filterの中でif文は使わないほうがいいかもね
filteredProducts = products.filter(function(product) {
  // console.log(product.type === "フルーツ");
  return product.type === "フルーツ";
});

console.log(filteredProducts);
// console.log(products[1].type === "フルーツ");
