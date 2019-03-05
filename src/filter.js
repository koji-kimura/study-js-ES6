var products = [
  { name: "きゅうり", type: "野菜", quantity: 1, price: 1 },
  { name: "バナナ", type: "フルーツ", quantity: 10, price: 15 },
  { name: "セロリ", type: "野菜", quantity: 30, price: 10 },
  { name: "オレンジ", type: "フルーツ", quantity: 3, price: 5 }
];

var filteredProducts = [];

// for (var i = 0; i < products.length; i++) {
//   if (products.type === "フルーツ") {
//     filteredProducts.push(products[i]);
//   }
// }

// filterの中でif文は使わないほうがいいかもね
// filteredProducts = products.filter(function(product) {
//   // console.log(product.type === "フルーツ");
//   return product.type === "フルーツ";
// });

filteredProducts = products.filter(product => {
  return product.type === "野菜" && product.quantity > 0 && product.price < 10;
});

console.log(filteredProducts);
// console.log(products[1].type === "フルーツ");
