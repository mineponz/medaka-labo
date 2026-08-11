import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARTICLES, validateArticles, findArticle } from './articles.ts';

test('ARTICLES に形式エラーがない', () => {
  assert.deepEqual(validateArticles(ARTICLES), []);
});

test('validateArticles: 重複slugを検出する', () => {
  const errors = validateArticles([
    { slug: 'a', title: 't1', summary: 's1', publishedDate: '2026-01-01' },
    { slug: 'a', title: 't2', summary: 's2', publishedDate: '2026-01-02' },
  ]);
  assert.ok(errors.some((e) => e.includes('duplicate slug')));
});

test('validateArticles: 不正な日付を検出する', () => {
  const errors = validateArticles([
    { slug: 'a', title: 't', summary: 's', publishedDate: '2026/01/01' },
  ]);
  assert.ok(errors.some((e) => e.includes('invalid publishedDate')));
});

test('validateArticles: 空のtitle/summaryを検出する', () => {
  const errors = validateArticles([
    { slug: 'a', title: '  ', summary: '', publishedDate: '2026-01-01' },
  ]);
  assert.ok(errors.some((e) => e.includes('empty title')));
  assert.ok(errors.some((e) => e.includes('empty summary')));
});

test('findArticle: 存在するslugを取得できる', () => {
  const article = findArticle(ARTICLES[0].slug);
  assert.equal(article?.slug, ARTICLES[0].slug);
});

test('findArticle: 存在しないslugはundefinedを返す', () => {
  assert.equal(findArticle('does-not-exist'), undefined);
});
