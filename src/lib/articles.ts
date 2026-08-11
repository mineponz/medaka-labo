/**
 * 記事メタデータの一覧。記事を追加したらここに1件足し、
 * `src/pages/articles/<slug>.astro` を作る。
 */
export interface Article {
  slug: string;
  title: string;
  summary: string;
  /** ISO 8601 (YYYY-MM-DD) */
  publishedDate: string;
}

export const ARTICLES: Article[] = [
  {
    slug: 'tank-and-heater-guide',
    title: '水槽セット・オートヒーターの選び方',
    summary:
      '屋内飼育で最初に揃える水槽セットとオートヒーターを、サイズ・水量・対応温度の観点で比較する。',
    publishedDate: '2026-08-11',
  },
  {
    slug: 'food-and-water-conditioner',
    title: '産卵繁殖用の餌・水質調整剤の選び方',
    summary:
      '繁殖を狙う時期の餌の与え方と、水替え時に使う水質調整剤の役割・選び方をまとめる。',
    publishedDate: '2026-08-11',
  },
  {
    slug: 'starter-kit-checklist',
    title: '初心者向けメダカ飼育スタートキット',
    summary:
      'これからメダカを飼い始める人向けに、最低限そろえるべき用品をチェックリスト形式で紹介する。',
    publishedDate: '2026-08-11',
  },
];

const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** ARTICLES の形式が壊れていないかを検証する。テスト用に切り出した純粋関数。 */
export function validateArticles(articles: Article[]): string[] {
  const errors: string[] = [];
  const seenSlugs = new Set<string>();

  for (const article of articles) {
    if (!SLUG_PATTERN.test(article.slug)) {
      errors.push(`invalid slug: "${article.slug}"`);
    }
    if (seenSlugs.has(article.slug)) {
      errors.push(`duplicate slug: "${article.slug}"`);
    }
    seenSlugs.add(article.slug);

    if (article.title.trim().length === 0) {
      errors.push(`empty title for slug: "${article.slug}"`);
    }
    if (article.summary.trim().length === 0) {
      errors.push(`empty summary for slug: "${article.slug}"`);
    }
    if (!DATE_PATTERN.test(article.publishedDate) || Number.isNaN(Date.parse(article.publishedDate))) {
      errors.push(`invalid publishedDate for slug: "${article.slug}"`);
    }
  }

  return errors;
}

export function findArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
