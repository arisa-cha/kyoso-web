// ページ読み込み後に実行する処理を登録します
document.addEventListener("DOMContentLoaded", function () {
  // 「詳しく見る」ボタンの要素を取得
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  // 追加の説明文を表示する要素を取得
  const moreInfo = document.getElementById("moreInfo");

  // ボタンがクリックされたときの処理を設定
  learnMoreBtn.addEventListener("click", function () {
    // hiddenクラスを付けたり外したりして、表示を切り替えます
    moreInfo.classList.toggle("hidden");

    // 現在の表示状態に合わせてボタンの文字を変更します
    if (moreInfo.classList.contains("hidden")) {
      learnMoreBtn.textContent = "詳しく見る";
    } else {
      learnMoreBtn.textContent = "閉じる";
    }
  });
});