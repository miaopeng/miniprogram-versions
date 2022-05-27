
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.24.4

console.log('The most popular version:', mostPopular);
// 2.24.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.24, "sdkVer": "2.24.4" },
  { "percentage": 84.48, "sdkVer": "2.24.3" },
  { "percentage": 0.72, "sdkVer": "2.24.2" },
  { "percentage": 0.02, "sdkVer": "2.24.1" },
  { "percentage": 0, "sdkVer": "2.24.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 84.48, "sdkVer": "2.24.3" },
  { "percentage": 6.21, "sdkVer": "2.23.4" },
  { "percentage": 2.1, "sdkVer": "2.21.4" },
  { "percentage": 1.48, "sdkVer": "2.19.6" },
  { "percentage": 0.96, "sdkVer": "2.20.3" }
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

更新时间：2022 年 5 月 27 日
