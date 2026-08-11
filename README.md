# medaka-labo

メダカ飼育用品（水槽・ヒーター・餌・水質調整剤など）の選び方をまとめる紹介サイト。
Amazonアソシエイト・プログラムを主な収益導線として運営する。

## 公開中の記事

- **水槽セット・オートヒーターの選び方** (`/articles/tank-and-heater-guide/`)
- **産卵繁殖用の餌・水質調整剤の選び方** (`/articles/food-and-water-conditioner/`)
- **初心者向けメダカ飼育スタートキット** (`/articles/starter-kit-checklist/`)

## ツール以外のページ

- **プライバシーポリシー** (`/privacy/`) — Amazonアソシエイトの開示、および将来
  ディスプレイ広告（AdSense等）を掲載する場合に備えた必須コンテンツをまとめている。
  **Amazonアソシエイトのタグは未取得（プレースホルダ）のため「参加を予定している」という
  表現になっている。** `src/consts.ts` の `AMAZON_ASSOCIATE_TAG` を実タグに差し替えたら、
  `src/pages/privacy.astro` の表記も自動的に「参加している」に切り替わる
  （`isAssociateTagPlaceholder` の分岐）。
- **お問い合わせ** (`/contact/`) — 連絡先は `src/consts.ts` の `CONTACT_EMAIL`。
  **現在はプレースホルダで、本番公開前に実在のアドレスへ差し替えが必要。**

## 本番公開前に必要な作業（本人）

1. Amazonアソシエイトへ登録・審査申請し、承認後に取得したトラッキングタグを
   `src/consts.ts` の `AMAZON_ASSOCIATE_TAG` に設定する。
2. `src/consts.ts` の `CONTACT_EMAIL` を実在のアドレスに差し替える。
3. Cloudflareダッシュボードでこのリポジトリを新規プロジェクトとして接続する。

## 技術構成

`~/workspace/minitools` / `~/workspace/carrot-club` と同じ構成（Astro 7 + Cloudflare Workers
静的アセット配信 + node:test）。詳細は `AGENTS.md` を参照。
