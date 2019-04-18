function User(id = generateId()) {
  this.id = id;
}

new User(9);

function generateId() {
  return Math.random() * 9999;
}

// デフォルト引数を入れられる
function createAdminUser(user = new User()) {
  user.admin = true;
  return user;
}

const user = new User(10);

console.log(createAdminUser());
console.log(user);

// function makeAjaxRequest(url, method = "GET") {
//   //   if (method) {
//   //     method = "GET";
//   //   }

//   // ajaxリクエストをするロジックがここにあると想定
//   return method;
// }
// // undefinedではデフォルト値と同じになる
// makeAjaxRequest("google.com", null);
// makeAjaxRequest("google.com", POST);
