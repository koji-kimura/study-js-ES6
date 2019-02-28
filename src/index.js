// 配列の便利メソッド

// forで記載しているもの、でも今後は記載しないようにしていく
// 冗長だから
var colors = ["red", "blue", "green"];
// for (var i = 0; i < colors.length; i++) {
//   console.log("for:" + colors[i]);
// }

colors.forEach(function(color) {
  console.log(color);
});
