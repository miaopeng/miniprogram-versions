# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version of miniprogram sdk is:', latest);
// 2.10.4

console.log('The most popular version of miniprogram sdk is:', mostPopular);
// 2.10.4

```
Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { percentage: 92.4263288015, sdkVer: '2.10.4' },
  { percentage: 0.210412677457, sdkVer: '2.10.3' },
  { percentage: 0.00272181514738, sdkVer: '2.10.2' },
  { percentage: 0.108063075593, sdkVer: '2.10.1' },
  { percentage: 0.00022693844857, sdkVer: '2.10.0' },
  { percentage: 2.19408370525, sdkVer: '2.9.5' },
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { percentage: 92.4263288015, sdkVer: '2.10.4' },
  { percentage: 2.19408370525, sdkVer: '2.9.5' },
  { percentage: 1.84410207412, sdkVer: '2.8.3' },
  { percentage: 1.05559039403, sdkVer: '2.6.6' },
  { percentage: 0.953009876569, sdkVer: '2.7.7' },
  ...
]
*/
```

Get versions in iOS or Android.

```
const { android, iOS } = require('miniprogram-versions');
console.log('android versions', android);
console.log('android latest version', android.latest);
console.log('iOS versions', iOS);
console.log('iOS latest version', iOS.latest);
```

## Manual Update Data

```
yarn update
```

## 更新时间

更新时间：2020 年 4 月 6 日
