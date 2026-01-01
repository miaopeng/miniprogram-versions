
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.13.1

console.log('The most popular version:', mostPopular);
// 3.13.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 1.17, "sdkVer": "3.13.1" },
  { "percentage": 74.45, "sdkVer": "3.13.0" },
  { "percentage": 9.19, "sdkVer": "3.12.1" },
  { "percentage": 0.16, "sdkVer": "3.12.0" },
  { "percentage": 3.45, "sdkVer": "3.11.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 74.45, "sdkVer": "3.13.0" },
  { "percentage": 9.19, "sdkVer": "3.12.1" },
  { "percentage": 3.45, "sdkVer": "3.11.3" },
  { "percentage": 3.31, "sdkVer": "3.10.3" },
  { "percentage": 2.48, "sdkVer": "3.8.12" }
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

更新时间：2026 年 1 月 1 日
