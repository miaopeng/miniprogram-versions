
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.5

console.log('The most popular version:', mostPopular);
// 3.7.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.03, "sdkVer": "3.7.5" },
  { "percentage": 83.94, "sdkVer": "3.7.4" },
  { "percentage": 0.3, "sdkVer": "3.7.3" },
  { "percentage": 0.02, "sdkVer": "3.7.2" },
  { "percentage": 0, "sdkVer": "3.7.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 83.94, "sdkVer": "3.7.4" },
  { "percentage": 6.6, "sdkVer": "3.6.6" },
  { "percentage": 2.48, "sdkVer": "3.5.8" },
  { "percentage": 1.57, "sdkVer": "3.3.5" },
  { "percentage": 1.39, "sdkVer": "3.4.10" }
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

更新时间：2025 年 1 月 12 日
