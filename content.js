// リンクのAlt+クリック(Option+クリック)によるダウンロードを抑制

// クリックイベントをキャプチャフェーズで監視
document.addEventListener('click', function(event) {
  // Alt/Optionキーが押されている場合
  if (event.altKey) {
    const target = event.target.closest('a');

    // クリックされた要素がリンク、またはリンク内の要素の場合
    if (target && target.href) {
      // デフォルトのダウンロード動作を抑制
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      console.log('Alt+クリックによるダウンロードを抑制しました:', target.href);

      // 通常のクリックとして処理（同じタブで開く）
      window.location.href = target.href;

      return false;
    }
  }
}, true); // キャプチャフェーズで実行

// mousedownイベントでも念のため抑制
document.addEventListener('mousedown', function(event) {
  if (event.altKey) {
    const target = event.target.closest('a');
    if (target && target.href) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  }
}, true);
