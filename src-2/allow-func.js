const team = {
  members: ["太郎", "花子"],
  teamName: "スーパーチーム",
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member}は${this.teamName}の所属です`;
    });
  }
};

// const numbers = [1, 2, 3];

// let doubleNum = numbers.map(number => 2 * number);
// console.log(doubleNum);

// 矢印忘れがちなので注意
// 引数が１つだけの時だけ省略できる
// const double = number => 2 * number;

// let x = double(8);
// console.log(x);

// // 評価項目が一個しかないなら暗黙的にリターンしてくれる
// const add = (a, b) => a + b;

// let x = add(1, 2);

// console.log(x);
