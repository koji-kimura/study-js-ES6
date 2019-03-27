function getMessage() {
  const year = new Date().getFullYear();
  //   return "今年は" + year + "年です";
  // ${}の中ならjsを何を入れてもいい
  return `今年は${year}年です`;
}

console.log(getMessage());
