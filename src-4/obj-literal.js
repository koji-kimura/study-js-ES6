function createBookShop(inventry) {
  return {
    inventry: inventry,
    inventryValue: function() {
      return this.inventry.reduce((total, book) => {
        total += book.price;
        return total;
      }, 0);
    },
    priceForTitle: function() {}
  };
}

const inventry = [
  { title: "ハリーポッター", price: 1000 },
  { title: "js入門", price: 1500 }
];

console.log(createBookShop(inventry).inventryValue());
