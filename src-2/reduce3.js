function balanceParens(string) {
  // 0だと正しいので
  return !string.split("").reduce((previous, char) => {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return previous + 1;
    }
    if (char === ")") {
      return previous - 1;
    }
  }, 0);
}

let x = balanceParens("())");

console.log(x);
