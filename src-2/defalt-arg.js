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

createAdminUser(new User(generateId()));

// function makeAjaxRequest(url, method = "GET") {
//   //   if (!method) {
//   //     method = "GET";
//   //   }
//   // ajaxリクエストをするロジックがここにあると想定
// }

// console.log(makeAjaxRequest("google.com", null));
// makeAjaxRequest("google.com", "POST");
