
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.9.0

console.log('The most popular version:', mostPopular);
// 3.8.12

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 1.69, "sdkVer": "3.9.0" },
  { "percentage": 89.75, "sdkVer": "3.8.12" },
  { "percentage": 0.08, "sdkVer": "3.8.11" },
  { "percentage": 0.68, "sdkVer": "3.8.10" },
  { "percentage": 0.01, "sdkVer": "3.8.9" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 89.75, "sdkVer": "3.8.12" },
  { "percentage": 2.29, "sdkVer": "3.7.12" },
  { "percentage": 1.69, "sdkVer": "3.9.0" },
  { "percentage": 1.35, "sdkVer": "3.6.6" },
  { "percentage": 0.75, "sdkVer": "3.5.8" }
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

更新时间：2025 年 8 月 1 日
