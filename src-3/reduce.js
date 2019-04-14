function balanvedParens(string) {
  // !を頭につけると真偽値にできるのね
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

let x = balanvedParens("()");

console.log(x);

// var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// //変数はacumulatorのaccを使うパターンもある
// const x = primaryColors.reduce(function(previous, primaryColor) {
//   previous.push(primaryColor.color);
//   return previous;
// }, []);

// console.log(x);
// // var numbers = [10, 20, 30];
// // var sum = 0;

// // // for (var i = 0; i < numbers.length; i++) {
// // //   sum += numbers[i];
// // // }

// // let x = numbers.reduce(function(sum, number) {
// //   return sum + number;
// // }, 0);

// // console.log(x);
