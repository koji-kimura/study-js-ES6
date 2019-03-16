var savedFile = {
  extension: "jpg",
  name: "profile",
  size: 14040
};

// ES5
// function fileSummary(file) {
//   return `${file.name}.${file.extension}の容量は${file.size}です`;
// }

// ES6 分割代入は引数でできる
function fileSummary({ name, extension, size }, { username }) {
  return `${username}:${name}.${extension}の容量は${size}です`;
}

var text = fileSummary(savedFile, { username: "ken" });
console.log(text);
