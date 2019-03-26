function unique(array) {
  // ユニーク関数は値を返す
  return array.reduce((previous, element) => {
    // console.log(element);
    // 重複チェック、重複が見つかったら次に移動
    let doubleNum = previous.find(num => {
      return num === element;
    });
    // 重複してないなら
    if (!doubleNum) {
      // previous　配列を追加
      previous.push(element);
    }
    // そんなpreviousを返す
    return previous;
  }, []);
}

// returnがいくつもあると混乱する
// それぞれの値でチェックを行って、最終的にユニークになった値を返している
