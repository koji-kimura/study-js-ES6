function getMessage() {
  // const year = new Date().getFullYear();

  // return "今年は" + year + "年です";
  // return `今年は${year}年です`;
  return `今年は${new Date().getFullYear()}年です`;
}

console.log(getMessage());
