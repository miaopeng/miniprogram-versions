
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.6

console.log('The most popular version:', mostPopular);
// 3.7.5

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 1.26, "sdkVer": "3.7.6" },
  { "percentage": 62.57, "sdkVer": "3.7.5" },
  { "percentage": 22.25, "sdkVer": "3.7.4" },
  { "percentage": 0.04, "sdkVer": "3.7.3" },
  { "percentage": 0.01, "sdkVer": "3.7.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 62.57, "sdkVer": "3.7.5" },
  { "percentage": 22.25, "sdkVer": "3.7.4" },
  { "percentage": 4.77, "sdkVer": "3.6.6" },
  { "percentage": 2.38, "sdkVer": "3.5.8" },
  { "percentage": 1.57, "sdkVer": "3.3.5" }
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

更新时间：2025 年 1 月 18 日
