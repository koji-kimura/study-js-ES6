function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    // プラスマイナスが入れ替わっているとうまくいかなかった
    if (char === ")") {
      return previous - 1;
    }
    if (char === "(") {
      return previous + 1;
    }
  }, 0);
}

var x = balancedParens(")(");
console.log(x);
