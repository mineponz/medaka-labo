# medaka-labo

メダカ飼育用品の紹介サイト（Amazonアソシエイト主軸）。すべて静的サイト。
運用記録・タスク管理は別リポジトリの Obsidian vault（`~/secondBrain`）側にある
（`1-projects/affili-lab/`）。

## このリポジトリの方針

- **生体（メダカ個体）の販売・仲介・売買を煽る内容は書かない。** 用品の紹介に限定する
  （景表法・動物愛護管理法まわりのリスクを避けるための明確な線引き。詳細はvault側の
  `1-projects/affili-lab/notes/20260811-genre-candidates.md` 候補1の項）。
- **記事には必ずPR表記を入れる。** 「本記事はプロモーションを含みます」を各記事冒頭に置く
  （景表法ステマ規制対応）。
- **Amazon商品リンクは検索結果ページへのリンクにする（`src/components/AmazonLink.astro`）。**
  実在を確認していない特定ASIN（商品コード）へ直リンクしない。実際に使う商品が決まったら、
  個別記事内でそのリンクだけを`dp/<ASIN>`形式に差し替える。
- 記事のメタデータは `src/lib/articles.ts` の `ARTICLES` 配列に集約し、`validateArticles`で
  形式（slugの一意性・日付形式など）をテストする。

## コマンド

```
npm run dev      # 開発サーバー
npm test         # src/lib/*.test.ts を実行
npm run check    # 型チェック + テスト
npm run build    # dist/ に静的出力
```

## 記事を追加する手順

1. `src/lib/articles.ts` の `ARTICLES` に1件足す（`slug`はケバブケース）。
   `topics`（トップページの絞り込みタグ）は**1つ以上必須**。既存8分類（`Topic`型）から選ぶ
2. `src/pages/articles/<slug>.astro` を作る（既存記事をコピーして書き換えるのが早い）
3. PR表記・生体売買を煽らない旨を守る
4. `npm test`（`articles.ts`のバリデーション）と `npm run build` を通す

## 未対応・要本人作業

- `src/consts.ts` の `AMAZON_ASSOCIATE_TAG` はプレースホルダ。Amazonアソシエイト審査通過後、
  本人が取得した実タグに差し替える。
- `src/consts.ts` の `CONTACT_EMAIL` もプレースホルダ。
- Cloudflareダッシュボードでのリポジトリ接続（新規プロジェクト作成）は本人のブラウザ操作が必要。
