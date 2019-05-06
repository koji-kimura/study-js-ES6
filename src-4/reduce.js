var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

var x = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log(sum);
console.log(x);
