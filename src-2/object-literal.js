// オブジェクトリテラルの2要素
// 1.キーとバリューが同じ値なら省略できる
// 2.functionだったら()で省略できる

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "ハリーポッター", price: 1000 },
  { title: "js入門", price: 1500 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());

console.log(bookShop.priceForTitle("ハリーポッター"));
