function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
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

let x = balancedParens(")(");

console.log(x);

// var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// let x = primaryColors.reduce(function(previous, primaryColor) {
//   previous.push(primaryColor.color);
//   return previous;
// }, []);

// console.log(x);

// // let x = primaryColors.map((primaryColor)=> {
// //     return primaryColor.color;
// // })
// // console.log(x);

// // var numbers = [10, 20, 30];
// // var sum = 0;

// // for (var i = 0; i < numbers.length; i++) {
// //   sum += numbers[i];
// // }

// // var x = numbers.reduce(function(sum, number) {
// //   return sum + number;
// // }, 0);

// // console.log(sum);
// // console.log(x);
