// https://qiita.com/kura07/items/cf168a7ea20e8c2554c6を参考に
// 単なるオブジェクト宣言？
var obj = {};
obj[Symbol.iterator] = function() {
  var iterator = {}; // イテレータ
  var count = 1;
  iterator.next = function() {
    var iteratorResult =
      count <= 10
        ? { value: count++, done: false }
        : { value: undefined, done: true };
    return iteratorResult; // イテレータリザルト
  };
  return iterator;
};

console.log(obj[Symbol.iterator]());
