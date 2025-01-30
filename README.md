
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.7

console.log('The most popular version:', mostPopular);
// 3.7.7

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 80.98, "sdkVer": "3.7.7" },
  { "percentage": 0.01, "sdkVer": "3.7.6" },
  { "percentage": 0.01, "sdkVer": "3.7.5" },
  { "percentage": 0.02, "sdkVer": "3.7.4" },
  { "percentage": 0, "sdkVer": "3.7.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 80.98, "sdkVer": "3.7.7" },
  { "percentage": 12.09, "sdkVer": "3.6.6" },
  { "percentage": 1.78, "sdkVer": "3.5.8" },
  { "percentage": 1.25, "sdkVer": "3.3.5" },
  { "percentage": 1.07, "sdkVer": "3.4.10" }
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

更新时间：2025 年 1 月 30 日
