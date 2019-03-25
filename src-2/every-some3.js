function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("my_username");
var password = new Field("my_password");

let x = username.validate();

console.log(x);

username.validate() && password.validate();

var fields = [username, password];

let y = fields.every(field => {
  return field.validate();
});

console.log(y);
