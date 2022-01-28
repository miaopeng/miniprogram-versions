
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.22.0

console.log('The most popular version:', mostPopular);
// 2.21.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 37.35, "sdkVer": "2.22.0" },
  { "percentage": 47.4, "sdkVer": "2.21.4" },
  { "percentage": 0.07, "sdkVer": "2.21.3" },
  { "percentage": 0.01, "sdkVer": "2.21.2" },
  { "percentage": 0, "sdkVer": "2.21.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 47.4, "sdkVer": "2.21.4" },
  { "percentage": 37.35, "sdkVer": "2.22.0" },
  { "percentage": 6.59, "sdkVer": "2.19.6" },
  { "percentage": 2.16, "sdkVer": "2.20.2" },
  { "percentage": 1.17, "sdkVer": "2.20.3" }
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

更新时间：2022 年 1 月 28 日
