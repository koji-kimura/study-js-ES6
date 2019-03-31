function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user) {
  user.admin = true;
  return user;
}

let x = createAdminUser(new User(generateId()));
let y = createAdminUser(new User(10));
console.log(x);
console.log(y);
// function makeAjaxRequest(url, method = "GET") {
//   //   if (!method) {
//   //     method = "GET";
//   //   }
//   // ajaxリクエストをするロジックがここにあると想定
// }

// console.log(makeAjaxRequest("google.com", null));
// makeAjaxRequest("google.com", "POST");
