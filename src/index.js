// fpreach実践編
var numbers = [1, 2, 3, 4, 5];

// 合計を保持する変数を用意する
var sum = 0;
var add = number => {
  sum += number;
};

// 配列を１つ１つ足す
// 名前付きの関数を入れたら()はつけない
numbers.forEach(add);

// 合計を表示する
console.log(sum);
