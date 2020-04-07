const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { latest, mostPopular, versions, sortedByPercent } = require('..');

const first5Of = (array) =>
  prettier
    .format(JSON.stringify([].concat(array).slice(0, 5)), {
      parser: 'json',
    })
    .replace(']', '  ...\n]');

const last5 = first5Of(versions);
const top5 = first5Of(sortedByPercent);

const [y, m, d] = [
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  new Date().getDate(),
];

const makeReadme = (tpl) =>
  fs.writeFileSync(path.join(process.cwd(), 'README.md'), tpl);

makeReadme(`
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

\`\`\`;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// ${latest}

console.log('The most popular version:', mostPopular);
// ${mostPopular}

\`\`\`

Get all versions sorted by version or persentage.

\`\`\`
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
${last5}*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
${top5}*/
\`\`\`

Get versions in iOS or Android.

\`\`\`
const { android, iOS } = require('miniprogram-versions');
console.log('android versions', android);
console.log('android latest version', android.latest);
console.log('iOS versions', iOS);
console.log('iOS latest version', iOS.latest);
\`\`\`

## Manual Update Data

\`\`\`
yarn update
\`\`\`

## 更新时间

更新时间：${y} 年 ${m} 月 ${d} 日
`);
