function count(targetString) {
  //   const characters = ["a", "e", "i", "o", "u"];
  // スプレット演算子も使えるのね
  const characters = [..."aeiou"];
  let number = 0;

  for (let i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

console.log(count("aaqqqqqaaaaqq"));
// // var name = '太郎';
// // var title = 'webアプリケーションエンジニア';
// // var hourlySalary = 4000;

// const name = '太郎';
// let title = 'webアプリケーションエンジニア';
