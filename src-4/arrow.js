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

// let double = numbers.map(number => {
//   return 2 * number;
// });

// console.log(double);

// // const double = number => 2 * number;

// // console.log(double(8));

// // // const add = (a, b) => {
// // //   return a + b;
// // // };

// // // console.log(add(1, 2));
