// const add = (a, b) => a + b;

// console.log(add(1, 2));

// const double = (num1, num2) => 2 * num1 * num2;

// console.log(double(8, 4));

// const numbers = [1, 2, 3];

// const double = numbers.map(number => 2 * number);

// console.log(double);

const team = {
  members: ["太郎", "花子"],
  teamName: "スーパーチーム",
  teamSummary: function() {
    var self = this;
    return this.members.map(
      function(member) {
        // コールバック関数は別世界
        return `${member}は${self.teamName}の所属です`;
      }
      // .bind(this)
    );
  }
};
console.log(team.teamSummary());
