const MathLibrary = {
  calculateProduct(...rest) {
    // return a * b;
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log(MathLibrary.calculateProduct(2, 3));
console.log(MathLibrary.multiply(2, 3));
