import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARTICLES, TOPIC_LABELS, TOPIC_ORDER, validateArticles, findArticle } from './articles.ts';

test('ARTICLES に形式エラーがない', () => {
  assert.deepEqual(validateArticles(ARTICLES), []);
});

test('validateArticles: 重複slugを検出する', () => {
  const errors = validateArticles([
    { slug: 'a', title: 't1', summary: 's1', species: ['medaka'], topics: ['starter-kit'], publishedDate: '2026-01-01' },
    { slug: 'a', title: 't2', summary: 's2', species: ['medaka'], topics: ['starter-kit'], publishedDate: '2026-01-02' },
  ]);
  assert.ok(errors.some((e) => e.includes('duplicate slug')));
});

test('validateArticles: 不正な日付を検出する', () => {
  const errors = validateArticles([
    { slug: 'a', title: 't', summary: 's', species: ['medaka'], topics: ['starter-kit'], publishedDate: '2026/01/01' },
  ]);
  assert.ok(errors.some((e) => e.includes('invalid publishedDate')));
});

test('validateArticles: 空のtitle/summaryを検出する', () => {
  const errors = validateArticles([
    { slug: 'a', title: '  ', summary: '', species: ['medaka'], topics: ['starter-kit'], publishedDate: '2026-01-01' },
  ]);
  assert.ok(errors.some((e) => e.includes('empty title')));
  assert.ok(errors.some((e) => e.includes('empty summary')));
});

test('validateArticles: 空のspeciesを検出する', () => {
  const errors = validateArticles([
    { slug: 'a', title: 't', summary: 's', species: [], topics: ['starter-kit'], publishedDate: '2026-01-01' },
  ]);
  assert.ok(errors.some((e) => e.includes('empty species')));
});

test('validateArticles: 空のtopicsを検出する', () => {
  const errors = validateArticles([
    { slug: 'a', title: 't', summary: 's', species: ['medaka'], topics: [], publishedDate: '2026-01-01' },
  ]);
  assert.ok(errors.some((e) => e.includes('empty topics')));
});

test('TOPIC_ORDER は TOPIC_LABELS の全トピックを重複なく並べている', () => {
  assert.deepEqual([...TOPIC_ORDER].sort(), Object.keys(TOPIC_LABELS).sort());
  assert.equal(new Set(TOPIC_ORDER).size, TOPIC_ORDER.length);
});

test('findArticle: 存在するslugを取得できる', () => {
  const article = findArticle(ARTICLES[0].slug);
  assert.equal(article?.slug, ARTICLES[0].slug);
});

test('findArticle: 存在しないslugはundefinedを返す', () => {
  assert.equal(findArticle('does-not-exist'), undefined);
});
