
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.24.7

console.log('The most popular version:', mostPopular);
// 2.24.6

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 7.31, "sdkVer": "2.24.7" },
  { "percentage": 76.86, "sdkVer": "2.24.6" },
  { "percentage": 0.02, "sdkVer": "2.24.5" },
  { "percentage": 5.28, "sdkVer": "2.24.4" },
  { "percentage": 0, "sdkVer": "2.24.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 76.86, "sdkVer": "2.24.6" },
  { "percentage": 7.31, "sdkVer": "2.24.7" },
  { "percentage": 5.28, "sdkVer": "2.24.4" },
  { "percentage": 3.7, "sdkVer": "2.23.4" },
  { "percentage": 1.64, "sdkVer": "2.21.4" }
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

更新时间：2022 年 6 月 30 日
