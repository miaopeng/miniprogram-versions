
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.9

console.log('The most popular version:', mostPopular);
// 3.7.8

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.27, "sdkVer": "3.7.9" },
  { "percentage": 87.49, "sdkVer": "3.7.8" },
  { "percentage": 0.05, "sdkVer": "3.7.7" },
  { "percentage": 0, "sdkVer": "3.7.6" },
  { "percentage": 0, "sdkVer": "3.7.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 87.49, "sdkVer": "3.7.8" },
  { "percentage": 4.95, "sdkVer": "3.6.6" },
  { "percentage": 1.58, "sdkVer": "3.5.8" },
  { "percentage": 1.26, "sdkVer": "3.3.5" },
  { "percentage": 1.05, "sdkVer": "3.4.10" }
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

更新时间：2025 年 2 月 26 日
