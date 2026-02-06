# Alt+Click Download Blocker

リンクをAlt+クリック（macではOption+クリック）した時にHTMLダウンロードになってしまうのを抑制するChrome拡張です。

## 機能

- リンクのAlt+クリック/Option+クリックによる自動ダウンロードを防止
- 代わりに通常のクリックと同じように同じタブでリンクを開きます

## インストール方法

### 方法1: リリース版をインストール（推奨）

1. [Releases](https://github.com/k-tsumura331/chrome-extension-alt-click-blocker/releases)から最新の`.crx`ファイルをダウンロード
2. Chromeで `chrome://extensions/` を開く
3. ダウンロードした`.crx`ファイルをページにドラッグ&ドロップ
4. 「拡張機能を追加」をクリック

### 方法2: 開発者モードでインストール

1. このリポジトリをクローン
   ```bash
   git clone https://github.com/k-tsumura331/chrome-extension-alt-click-blocker.git
   ```
2. Chromeで `chrome://extensions/` を開く
3. 右上の「デベロッパーモード」をONにする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. クローンしたディレクトリを選択

## 使い方

インストールするだけで自動的に動作します。Alt+クリック（Option+クリック）でリンクをクリックすると、ダウンロードする代わりに通常のクリックと同じように同じタブで開きます。

## 開発者向け

### ビルド

リリース用の`.crx`ファイルは、GitHubにタグをプッシュすると自動的にビルドされます。

```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actionsが自動的に：
- crxファイルをビルド
- Releaseを作成
- crxファイルを添付

### ローカルでビルド

Chromeの拡張機能ページで「拡張機能をパッケージ化」を使用してください。

## 注意事項

- この拡張は全てのウェブサイトで動作します
- ダウンロードを完全に防ぐため、キャプチャフェーズでイベントを処理しています

## ライセンス

MIT
