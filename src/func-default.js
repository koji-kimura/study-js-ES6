// function makeAjaxRequest(url, method = "GET") {
//   return method;
// }

// makeAjaxRequest("google.com", null);
// makeAjaxRequest("google.com", "POST");

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

// console.log(new User(generateId()));

console.log(createAdminUser());

const user = new User(10);
console.log(user);
console.log(createAdminUser(user));
