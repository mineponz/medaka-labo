/**
 * サイト全体の定数。
 *
 * SITE_URL は canonical と sitemap.xml の生成に使われる。本番URLと一致していないと
 * Googleに存在しないURLを申告することになるため、変更時は robots.txt も併せて直す。
 * 独自ドメインを設定したらここを差し替える。
 */
export const SITE_URL = 'https://medaka-labo.mineponz.workers.dev';
export const SITE_TITLE = '金魚めだかラボ';
export const SITE_DESCRIPTION =
  'めだか・金魚の飼育で使う水槽・フィルター・餌・水質調整剤などの選び方をまとめている用品紹介サイトです。' +
  '生体（めだか・金魚個体）の販売・仲介はしていません。';

/**
 * お問い合わせ先メールアドレス。
 *
 * !!! 現在はプレースホルダ。本番公開前に必ず実在のアドレスへ差し替えること !!!
 * この値が CONTACT_EMAIL_PLACEHOLDER と一致する間だけ /contact/ が mailto リンクを出さず
 * 「準備中」と表示する（src/pages/contact.astro）。
 */
export const CONTACT_EMAIL_PLACEHOLDER = 'CONTACT_EMAIL_TODO';
export const CONTACT_EMAIL: string = CONTACT_EMAIL_PLACEHOLDER;

/** プライバシーポリシーの最終更新日（ページ末尾の表示に使う）。内容を変えたら必ず更新する。 */
export const PRIVACY_POLICY_UPDATED = '2026-08-13';
// 2026-08-13、Google Analytics導入の開示を追加した際に更新

/**
 * Amazonアソシエイトのトラッキングタグ。
 *
 * 2026-08-11、本人がAmazonアソシエイト登録IDとして取得した実際のタグに差し替え済み。
 * 登録直後は仮審査中の状態で、180日以内に適格販売（3件）が発生すると本審査に進む
 * 仕組みのため、リンクは既に公開してよい（審査完了前でも報酬記録の対象になる）。
 */
export const AMAZON_ASSOCIATE_TAG_PLACEHOLDER = 'YOUR_ASSOCIATE_TAG';
export const AMAZON_ASSOCIATE_TAG: string = 'medakalabo-22';

/** Google Analytics(GA4)の測定ID。2026-08-13、本人が発行したプロパティのIDを設定。 */
export const GA_MEASUREMENT_ID = 'G-70DW07RLXE';
