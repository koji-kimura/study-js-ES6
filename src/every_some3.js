function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("my_username");
var password = new Field("my_password");

var fields = [username, password];
// これで論理積作っていくの面倒
// console.log(username.validate());
// console.log(username.validate());

fields.every(field => {
  return field.validate();
});

// // 以下は例
// if (fromIsValid) {
//   // サーバーにリクエストを投げる
// } else {
//   //エラーを表示する
// }
