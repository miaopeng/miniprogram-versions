
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.6.6

console.log('The most popular version:', mostPopular);
// 3.6.5

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.57, "sdkVer": "3.6.6" },
  { "percentage": 86.9, "sdkVer": "3.6.5" },
  { "percentage": 0.01, "sdkVer": "3.6.4" },
  { "percentage": 0.18, "sdkVer": "3.6.3" },
  { "percentage": 0, "sdkVer": "3.6.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 86.9, "sdkVer": "3.6.5" },
  { "percentage": 4.13, "sdkVer": "3.5.8" },
  { "percentage": 1.98, "sdkVer": "3.3.5" },
  { "percentage": 1.87, "sdkVer": "3.4.10" },
  { "percentage": 0.96, "sdkVer": "2.27.3" }
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

更新时间：2024 年 11 月 22 日
