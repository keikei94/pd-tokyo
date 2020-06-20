'use strict';

function gate() {
  var UserInput = prompt("パスワードを入力して下さい:", "");
  // location.href = UserInput + ".html";
  if (/\W+/g.test(UserInput)) {
    // ▼半角英数字以外の文字が存在したらエラー
    alert("半角英数字のみを入力して下さい。");
  }
  // ▼キャンセルをチェック
  else if (UserInput != null) {
    // ▼入力内容からファイル名を生成して移動
    location.href = UserInput + ".html";
  }
}


