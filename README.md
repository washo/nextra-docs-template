このリポジトリでは、[本家](https://github.com/shuding/nextra-docs-template)のnextra-docs-templateを自分用に編集したものとなってます

## はじめてみる

まずは、下記のいずれかのコマンドで構築

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```


次に、ブラウザにて [http://localhost:3000](http://localhost:3000)へ接続し、表示される事を確認 

## 記事の作成
あとは、pagesの中にファイル・ディレクトリを作成し、MD/MDX記法で記事を書いていくだけです

例： 
サンプル記事として作成する場合、 下記のいずれかでファイルを作成

- pages/sample.mdx
- 階層化したいのであればpages/sample/index.mdx

sample.mdx(sample/index.mdx)の内容
```markdown

---
title: サンプル記事
---

## サンプル記事
ここにMarkdown記法で作成
```

## カスタマイズ概要
本家リポジトリをカスタマイズしている項目
- GoogleFont(M Plus)利用
- SSG出力のエラー回避のため画像最適化に`unoptimized: true,`を追記
- 外部URLを読み込むためS3とimgurを許可(適宜修正)
- 検索内文字を"検索"へ変更
- TOCの表記を”目次”へ変更
- feedbackを非表示
- Github,Twitterリンクアイコン非表示
- サイドバートグルボタン をデフォルトで表示
- Dark/Lightの配色を変更（適宜修正)

テーマのカスタマイズは、`theme.config.tsx`や`Home.module.css`で変更可能となってます  
最低限、**logoタイトル**、**フッター**、`Edit this page`の**リンク先**を変更しましょう！