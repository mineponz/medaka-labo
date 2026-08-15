/** 記事が扱う魚種タグ。1記事に複数付けてよい（例: 両種で使える用品の記事） */
export type Species = 'medaka' | 'goldfish';

export const SPECIES_LABELS: Record<Species, string> = {
  medaka: 'めだか',
  goldfish: '金魚',
};

/**
 * 記事が扱うトピックタグ。トップページの絞り込みに使う。
 * 記事を追加するときは必ず1つ以上付ける（分類が無いものは増やす前に体系を見直す）。
 */
export type Topic =
  | 'starter-kit'
  | 'tank-and-filter'
  | 'food-and-water'
  | 'aeration'
  | 'lighting'
  | 'outdoor'
  | 'seasonal-care'
  | 'breeding';

export const TOPIC_LABELS: Record<Topic, string> = {
  'starter-kit': 'スタートキット',
  'tank-and-filter': '水槽・ろ過・ヒーター',
  'food-and-water': '餌・水質調整剤',
  aeration: 'エアレーション',
  lighting: '照明',
  outdoor: '屋外飼育・ビオトープ',
  'seasonal-care': '季節対策',
  breeding: '産卵・繁殖',
};

/** 絞り込みUIでのトピックの並び順（飼育を始める順 → 用途別 → 季節・繁殖） */
export const TOPIC_ORDER: Topic[] = [
  'starter-kit',
  'tank-and-filter',
  'food-and-water',
  'aeration',
  'lighting',
  'outdoor',
  'seasonal-care',
  'breeding',
];

/**
 * 記事メタデータの一覧。記事を追加したらここに1件足し、
 * `src/pages/articles/<slug>.astro` を作る。
 */
export interface Article {
  slug: string;
  title: string;
  summary: string;
  species: Species[];
  /** 1件以上必須。トップページのタグ絞り込みに使う */
  topics: Topic[];
  /** ISO 8601 (YYYY-MM-DD) */
  publishedDate: string;
}

export const ARTICLES: Article[] = [
  {
    slug: 'tank-and-heater-guide',
    title: '水槽セット・オートヒーターの選び方',
    summary:
      '屋内飼育で最初に買う水槽セットとオートヒーター。サイズと水量、対応温度のどこを見れば失敗しないかをまとめました。',
    species: ['medaka'],
    topics: ['tank-and-filter'],
    publishedDate: '2026-08-11',
  },
  {
    slug: 'food-and-water-conditioner',
    title: '産卵繁殖用の餌・水質調整剤の選び方',
    summary:
      '繁殖を狙う時期の餌のあげ方と、水替えのたびに使う水質調整剤の話。地味だけど毎日効いてくる部分です。',
    species: ['medaka'],
    topics: ['food-and-water', 'breeding'],
    publishedDate: '2026-08-11',
  },
  {
    slug: 'starter-kit-checklist',
    title: '初心者向けメダカ飼育スタートキット',
    summary:
      'これからメダカを飼うなら、とりあえずこれだけ。最低限そろえたい用品をチェックリストにしました。',
    species: ['medaka'],
    topics: ['starter-kit'],
    publishedDate: '2026-08-11',
  },
  {
    slug: 'goldfish-tank-and-filter-guide',
    title: '金魚用の水槽・ろ過フィルターの選び方',
    summary:
      '金魚はとにかく水を汚します。水槽サイズとフィルターの能力をどう釣り合わせるかがポイントです。',
    species: ['goldfish'],
    topics: ['tank-and-filter'],
    publishedDate: '2026-08-11',
  },
  {
    slug: 'goldfish-food-and-water-conditioner',
    title: '金魚の餌・水質調整剤の選び方',
    summary:
      '大きさに合わせた餌の選び方と、水替えのたびに使う水質調整剤の役割をまとめました。',
    species: ['goldfish'],
    topics: ['food-and-water'],
    publishedDate: '2026-08-11',
  },
  {
    slug: 'goldfish-starter-kit-checklist',
    title: '初心者向け金魚飼育スタートキット',
    summary:
      'これから金魚を飼うなら、とりあえずこれだけ。最低限そろえたい用品をチェックリストにしました。',
    species: ['goldfish'],
    topics: ['starter-kit'],
    publishedDate: '2026-08-11',
  },
  {
    slug: 'outdoor-biotope-setup',
    title: '屋外ビオトープ飼育（プラ舟・睡蓮鉢）の始め方',
    summary:
      'めだかの屋外飼育で使うプラ舟・睡蓮鉢・防鳥ネットの選び方と、置き場所を決めるときに見落としがちな点。',
    species: ['medaka'],
    topics: ['outdoor'],
    publishedDate: '2026-08-11',
  },
  {
    slug: 'goldfish-aeration-and-air-pump',
    title: '金魚水槽のエアレーション・エアポンプの選び方',
    summary:
      '金魚は酸素をよく使います。エアポンプ・エアストーンの能力と、意外と大事な静音性の話。',
    species: ['goldfish'],
    topics: ['aeration'],
    publishedDate: '2026-08-11',
  },
  {
    slug: 'winter-care-equipment-guide',
    title: 'めだかの冬越し・保温対策用品の選び方',
    summary:
      '屋外飼育のめだかを寒さから守る発泡スチロール容器・簡易温室・保温ヒーターの選び方と、凍結時に慌てないための備えをまとめました。',
    species: ['medaka'],
    topics: ['seasonal-care', 'outdoor'],
    publishedDate: '2026-08-13',
  },
  {
    slug: 'goldfish-led-lighting-guide',
    title: '金魚水槽用LEDライトの選び方',
    summary:
      '金魚をきれいに見せるだけじゃなく、水草の育ちや生活リズムにも関わる照明選び。明るさ・色味・タイマーのどこを見ればいいかをまとめました。',
    species: ['goldfish'],
    topics: ['lighting'],
    publishedDate: '2026-08-13',
  },
  {
    slug: 'breeding-and-fry-equipment',
    title: '産卵床・稚魚飼育用品の選び方',
    summary:
      '産卵床選びから卵の隔離、稚魚用の餌まで。繁殖シーズンに揃えておきたい用品と、私が最初の年に卵を食べられてしまった失敗から学んだことをまとめました。',
    species: ['medaka'],
    topics: ['breeding'],
    publishedDate: '2026-08-14',
  },
  {
    slug: 'medaka-aeration-and-air-pump',
    title: 'めだか水槽のエアレーション・エアポンプの選び方',
    summary:
      'めだかにエアレーションは絶対に必要なのか。私の答えは「条件次第」です。入れたほうが安心な3つの場面と、屋外ビオトープでの要否の見分け方、エアポンプ選びで見ているところをまとめました。',
    species: ['medaka'],
    topics: ['aeration'],
    publishedDate: '2026-08-15',
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
    if (article.species.length === 0) {
      errors.push(`empty species for slug: "${article.slug}"`);
    }
    if (article.topics.length === 0) {
      errors.push(`empty topics for slug: "${article.slug}"`);
    }
  }

  return errors;
}

export function findArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
