import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('labels the top portfolio navigation link as Our work', () => {
  assert.match(html, /<a href="#project" class="hover:text-slate-900">Our work<\/a>/);
  assert.doesNotMatch(html, /<a href="#project" class="hover:text-slate-900">Selected work<\/a>/);
});

test('does not show placeholder policy links in the footer', () => {
  assert.doesNotMatch(html, />Privacy<\/a>/);
  assert.doesNotMatch(html, />Security<\/a>/);
  assert.doesNotMatch(html, />Terms<\/a>/);
});

test('uses the revised contact considerations wording', () => {
  assert.match(html, /indicative budget and any key considerations\.<\/p>/);
  assert.doesNotMatch(html, /key security considerations/);
  assert.doesNotMatch(html, /key consierations/);
});

test('positions the industry section around cross-industry software development', () => {
  const industrySection = html.match(/<section id="industrybackgroud"[\s\S]*?<\/section>/)?.[0] ?? '';

  assert.match(html, /<a href="#industrybackgroud" class="hover:text-slate-900">What we build<\/a>/);
  assert.match(industrySection, /Web applications and mobile apps, built for the way your organisation works/);
  assert.match(industrySection, /We build web applications, mobile apps and integrations for organisations across a range of industries/);
  assert.match(industrySection, /Clear, scalable software designed around real workflows and the people who use it/);
  assert.doesNotMatch(industrySection, /legal industry|law firms|Legal expertise/i);
});

test('uses the supplied design-components image in the industry section', () => {
  assert.match(html, /src="\/design-components\.avif" alt="Design components for a digital product"/);
  assert.doesNotMatch(html, /src="\/digital-product-workshop-team-uk\.avif"/);
});

test('restores the full-size industry image with a subtle bottom fade', () => {
  assert.match(html, /class="industry-image-fade"><img src="\/design-components\.avif" alt="Design components for a digital product" class="w-90 h-90 object-cover rounded-2xl shadow-lg">/);
  assert.match(html, /\.industry-image-fade\{[^}]*mask-image:linear-gradient\(to bottom,#000 62%,transparent 100%\)/);
  assert.match(html, /-webkit-mask-image:linear-gradient\(to bottom,#000 62%,transparent 100%\)/);
  assert.doesNotMatch(html, /class="industry-image"/);
});

test('aligns the industry text and image at their top edge', () => {
  assert.match(html, /<section id="industrybackgroud" class="bg-slate-50 border-y border-slate-200"><div class="container py-20 grid lg:grid-cols-2 gap-10 items-start">/);
  assert.match(html, /class="industry-image-fade"><img src="\/design-components\.avif"/);
  assert.doesNotMatch(html, /class="industry-image-fade mt-10"/);
});

test('showcases Aftermath Navigator as the featured project', () => {
  assert.match(html, /Aftermath Navigator/);
  assert.doesNotMatch(html, /Coming soon to iOS and Android/);
  assert.match(html, /Featured mobile app &mdash; coming soon/);
  assert.match(html, /class="portfolio-platform-pill">iOS<\/span>/);
  assert.match(html, /class="portfolio-platform-pill">Android<\/span>/);
  assert.doesNotMatch(html, /portfolio-release-status/);
  assert.match(html, /guided breathing and grounding exercises/);
  assert.match(html, /trauma-informed guides/);
  assert.match(html, /direct contact with Aftermath Support/);
});

test('shows the three supporting portfolio projects', () => {
  assert.match(html, /Bailey &amp; Cronin Chartered Surveyors/);
  assert.doesNotMatch(html, />Bailey &amp; Cronin<\/h3>/);
  assert.match(html, /Hydrangea Legal/);
  assert.match(html, /Engager\.app Mobile App/);
  assert.doesNotMatch(html, /Interest Calculator/);
});

test('uses the supplied Bailey and Cronin website capture', () => {
  assert.match(html, /src="\/bailey-and-cronin\.png" alt="Bailey and Cronin website homepage"/);
  assert.match(html, /class="portfolio-image-frame"><img src="\/bailey-and-cronin\.png"/);
  assert.match(html, /\.portfolio-image-frame\{width:100%;aspect-ratio:3\/2[^}]*background:#eef8e9/);
});

test('uses the supplied Hydrangea Legal Tools logo in the matching image frame', () => {
  assert.match(html, /class="portfolio-image-frame portfolio-image-frame--white"><img src="\/hydrangea-legal-tools-centred\.png" alt="Hydrangea Legal Tools logo" class="portfolio-visual">[\s\S]*Hydrangea Legal/);
  assert.match(html, /\.portfolio-image-frame--white\{background:#fff\}/);
  assert.doesNotMatch(html, /portfolio-image-frame--hydrangea/);
});

test('uses a blurred Aftermath app preview inside a phone frame', () => {
  assert.match(html, /class="portfolio-phone-frame"><img src="\/aftermath-navigator-blurred\.png" alt=""/);
  assert.match(html, /\.portfolio-phone-frame img\{[^}]*filter:blur\(16px\)/);
});

test('shows iOS and Android availability on the Engager app card', () => {
  assert.match(html, /class="engager-app-visual" role="img" aria-label="Stylised Engager\.app mobile app visual highlighting secure access, documents and e-signing"/);
  assert.match(html, /Engager\.app[\s\S]*Client work,<br>on the move\.[\s\S]*Secure access[\s\S]*Documents[\s\S]*eSign/);
  assert.doesNotMatch(html, /engager-placeholder\.svg/);
  assert.match(html, /\.engager-app-visual\{[^}]*background:linear-gradient/);
  assert.match(html, /class="portfolio-platform-pill">iOS<\/span>[\s\S]*class="portfolio-platform-pill">Android<\/span>[\s\S]*Engager\.app Mobile App/);
});

test('aligns supporting-card actions along the shared bottom edge', () => {
  assert.match(html, /\.portfolio-support-grid>article>\.portfolio-card-footer\{margin-top:auto!important\}/);
  assert.equal((html.match(/class="portfolio-card-footer"/g) ?? []).length, 3);
});

test('uses safe external project links and no Hydrangea destination', () => {
  assert.match(html, /href="https:\/\/baileyandcronin\.co\.uk\/" target="_blank" rel="noopener noreferrer"/);
  assert.match(html, /href="https:\/\/aftermathsupport\.org\.uk\/2026\/06\/29\/aftermath-navigator-coming-soon\/" target="_blank" rel="noopener noreferrer"/);
  assert.doesNotMatch(html, /href="[^"]*hydrangea/i);
});

test('keeps the featured project CTA separate from its proof points', () => {
  assert.match(html, /\.portfolio-feature-content\{display:flex;flex-direction:column;align-items:flex-start;gap:1\.25rem\}/);
  assert.match(html, /<div class="portfolio-feature-content">/);
});
