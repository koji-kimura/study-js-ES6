function createBookShop(inventory) {
  return {
    // inventory: inventory,
    inventory,
    // キーがfunctionなら省略できる
    inventoryValue() {
      // reduceは蓄積される値と初期値がある
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
console.log(bookShop.priceForTitle("js入門"));
