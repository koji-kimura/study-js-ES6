var expense = {
  type: "交際費",
  amount: "4500 JPY"
};

// var type = expense.type;
// var amount = expense.amount;

// ES6
// const { type } = expense;
// const { amount } = expense;

// 同じ名前にしないといけない
// キーバリューで名前を変えることもできる
// キーにない場合はundefinedになる
const { type, amount } = expense;
console.log(type);
console.log(amount);
