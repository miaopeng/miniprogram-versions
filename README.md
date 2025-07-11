
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.8.11

console.log('The most popular version:', mostPopular);
// 3.8.10

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.27, "sdkVer": "3.8.11" },
  { "percentage": 89.55, "sdkVer": "3.8.10" },
  { "percentage": 1.2, "sdkVer": "3.8.9" },
  { "percentage": 0.01, "sdkVer": "3.8.8" },
  { "percentage": 0.01, "sdkVer": "3.8.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 89.55, "sdkVer": "3.8.10" },
  { "percentage": 2.84, "sdkVer": "3.7.12" },
  { "percentage": 1.61, "sdkVer": "3.6.6" },
  { "percentage": 1.2, "sdkVer": "3.8.9" },
  { "percentage": 0.84, "sdkVer": "3.5.8" }
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

更新时间：2025 年 7 月 11 日
