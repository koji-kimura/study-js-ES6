function createBookShop(inventory) {
  return {
    // :の前後が一緒なら省略できる
    inventory,
    // functionを省略できる
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

console.log(bookShop);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("ハリーポッター"));
