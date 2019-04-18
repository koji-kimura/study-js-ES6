const team = {
  members: ["太郎", "花子"],
  teamName: "スーパーチーム",
  teamSumary: function() {
    // アロー関数はlexical thisで。構文的にthisを配置できる
    // this === team
    return this.members.map(member => {
      return `${member}は${this.teamName}の所属です`;
    });
  }
};

console.log(team);

// const numbers = [1, 2, 3];
// const x = numbers.map(number => 2 * number);

// console.log(x);
// // // 引数の()も省略はできる
// // const double = number => 2 * number;

// // console.log(double(8));
// // // //{}もreturnも省略はできる
// // // const add = (a, b) => a + b;

// // // console.log(add(1, 2));
