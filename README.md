
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.8.10

console.log('The most popular version:', mostPopular);
// 3.8.9

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.79, "sdkVer": "3.8.10" },
  { "percentage": 89.39, "sdkVer": "3.8.9" },
  { "percentage": 0.07, "sdkVer": "3.8.8" },
  { "percentage": 0.01, "sdkVer": "3.8.7" },
  { "percentage": 0.01, "sdkVer": "3.8.6" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 89.39, "sdkVer": "3.8.9" },
  { "percentage": 3.34, "sdkVer": "3.7.12" },
  { "percentage": 1.71, "sdkVer": "3.6.6" },
  { "percentage": 0.91, "sdkVer": "3.5.8" },
  { "percentage": 0.82, "sdkVer": "3.3.5" }
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

更新时间：2025 年 6 月 29 日
