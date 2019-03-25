var users = [{ name: "太郎" }, { name: "二郎" }, { name: "三郎" }];

var user;

user = users.find(user => {
  return user.name === "二郎";
});

// for (var i = 0; i < users.length; i++) {
//   if (users[i].name === "二郎") {
//     user = users[i];
//     break;
//   }
// }

console.log(user);
