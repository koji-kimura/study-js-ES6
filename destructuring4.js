// 配列とオブジェクトを同時に分割代入
// const companies = [
//   { name: "google", location: "マウンテンビュー" },
//   { name: "fasebook", location: "メンロパーク" },
//   { name: "uber", location: "サンフランシスコ" }
// ];

// // const location = companies[0].location;
// // １つ目の配列のキーがロケーションの名前
// const [{ location }] = companies;

// console.log(location);

const Google = {
  locations: ["マウンテンビュー", "ニューヨーク", "ローマ"]
};

const {
  locations: [first]
} = Google;

console.log(first);
