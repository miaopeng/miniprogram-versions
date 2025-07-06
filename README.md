
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
  { "percentage": 0.17, "sdkVer": "3.8.10" },
  { "percentage": 90.45, "sdkVer": "3.8.9" },
  { "percentage": 0.02, "sdkVer": "3.8.8" },
  { "percentage": 0.01, "sdkVer": "3.8.7" },
  { "percentage": 0.02, "sdkVer": "3.8.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 90.45, "sdkVer": "3.8.9" },
  { "percentage": 3.06, "sdkVer": "3.7.12" },
  { "percentage": 1.72, "sdkVer": "3.6.6" },
  { "percentage": 0.87, "sdkVer": "3.5.8" },
  { "percentage": 0.8, "sdkVer": "3.3.5" }
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

更新时间：2025 年 7 月 6 日
