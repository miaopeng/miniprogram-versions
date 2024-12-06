
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.1

console.log('The most popular version:', mostPopular);
// 3.6.6

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.03, "sdkVer": "3.7.1" },
  { "percentage": 27.88, "sdkVer": "3.7.0" },
  { "percentage": 61.67, "sdkVer": "3.6.6" },
  { "percentage": 0.09, "sdkVer": "3.6.5" },
  { "percentage": 0, "sdkVer": "3.6.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 61.67, "sdkVer": "3.6.6" },
  { "percentage": 27.88, "sdkVer": "3.7.0" },
  { "percentage": 3.19, "sdkVer": "3.5.8" },
  { "percentage": 1.67, "sdkVer": "3.3.5" },
  { "percentage": 1.56, "sdkVer": "3.4.10" }
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

更新时间：2024 年 12 月 6 日
