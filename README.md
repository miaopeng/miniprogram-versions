
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.8.8

console.log('The most popular version:', mostPopular);
// 3.8.7

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 7.74, "sdkVer": "3.8.8" },
  { "percentage": 82.76, "sdkVer": "3.8.7" },
  { "percentage": 0.11, "sdkVer": "3.8.6" },
  { "percentage": 0.04, "sdkVer": "3.8.0" },
  { "percentage": 3.33, "sdkVer": "3.7.12" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.76, "sdkVer": "3.8.7" },
  { "percentage": 7.74, "sdkVer": "3.8.8" },
  { "percentage": 3.33, "sdkVer": "3.7.12" },
  { "percentage": 1.68, "sdkVer": "3.6.6" },
  { "percentage": 0.83, "sdkVer": "3.5.8" }
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

更新时间：2025 年 6 月 12 日
