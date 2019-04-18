function getMessage() {
  const year = new Date().getFullYear();
  //jsなら{}の中に入れてOK
  return `今年は${year - 1}年です`;
}

console.log(getMessage());
