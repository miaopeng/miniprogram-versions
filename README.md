
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.4.8

console.log('The most popular version:', mostPopular);
// 3.4.7

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.01, "sdkVer": "3.4.8" },
  { "percentage": 87.13, "sdkVer": "3.4.7" },
  { "percentage": 0.19, "sdkVer": "3.4.6" },
  { "percentage": 0, "sdkVer": "3.4.5" },
  { "percentage": 0, "sdkVer": "3.4.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 87.13, "sdkVer": "3.4.7" },
  { "percentage": 5.62, "sdkVer": "3.3.5" },
  { "percentage": 1.35, "sdkVer": "3.1.5" },
  { "percentage": 1.03, "sdkVer": "3.2.5" },
  { "percentage": 1.03, "sdkVer": "2.27.3" }
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

更新时间：2024 年 6 月 25 日
