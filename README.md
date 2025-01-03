
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.4

console.log('The most popular version:', mostPopular);
// 3.7.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.54, "sdkVer": "3.7.4" },
  { "percentage": 82.09, "sdkVer": "3.7.3" },
  { "percentage": 0.4, "sdkVer": "3.7.2" },
  { "percentage": 0.01, "sdkVer": "3.7.1" },
  { "percentage": 0, "sdkVer": "3.7.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.09, "sdkVer": "3.7.3" },
  { "percentage": 6.97, "sdkVer": "3.6.6" },
  { "percentage": 2.76, "sdkVer": "3.5.8" },
  { "percentage": 1.68, "sdkVer": "3.3.5" },
  { "percentage": 1.51, "sdkVer": "3.4.10" }
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

更新时间：2025 年 1 月 3 日
