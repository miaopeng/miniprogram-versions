
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.5.8

console.log('The most popular version:', mostPopular);
// 3.5.7

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 1.77, "sdkVer": "3.5.8" },
  { "percentage": 86.36, "sdkVer": "3.5.7" },
  { "percentage": 0.05, "sdkVer": "3.5.6" },
  { "percentage": 0.02, "sdkVer": "3.5.5" },
  { "percentage": 0, "sdkVer": "3.5.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 86.36, "sdkVer": "3.5.7" },
  { "percentage": 3.59, "sdkVer": "3.4.10" },
  { "percentage": 2.84, "sdkVer": "3.3.5" },
  { "percentage": 1.77, "sdkVer": "3.5.8" },
  { "percentage": 0.98, "sdkVer": "3.1.5" }
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

更新时间：2024 年 9 月 20 日
