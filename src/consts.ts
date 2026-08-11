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
  'めだか・金魚の飼育に使う水槽・フィルター・餌・水質調整剤などの選び方をまとめる用品紹介サイト。' +
  '生体（めだか・金魚個体）の販売・仲介は行っていません。';

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
export const PRIVACY_POLICY_UPDATED = '2026-08-11';

/**
 * Amazonアソシエイトのトラッキングタグ。
 *
 * !!! 現在はプレースホルダ。Amazonアソシエイト審査通過後、本人が取得した実際のタグに
 * 差し替えること（本人が行う外部手続き。審査前にリンクを公開しても報酬は発生しない）。
 * 差し替えるまでは各記事内のAmazonリンクがこのプレースホルダタグのまま本番公開される点に注意。
 */
export const AMAZON_ASSOCIATE_TAG_PLACEHOLDER = 'YOUR_ASSOCIATE_TAG';
export const AMAZON_ASSOCIATE_TAG: string = AMAZON_ASSOCIATE_TAG_PLACEHOLDER;
