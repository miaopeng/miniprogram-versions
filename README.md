
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.24.3

console.log('The most popular version:', mostPopular);
// 2.24.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.73, "sdkVer": "2.24.3" },
  { "percentage": 83.83, "sdkVer": "2.24.2" },
  { "percentage": 0.05, "sdkVer": "2.24.1" },
  { "percentage": 0.01, "sdkVer": "2.24.0" },
  { "percentage": 0.04, "sdkVer": "2.23.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 83.83, "sdkVer": "2.24.2" },
  { "percentage": 6.59, "sdkVer": "2.23.4" },
  { "percentage": 2.2, "sdkVer": "2.21.4" },
  { "percentage": 1.54, "sdkVer": "2.19.6" },
  { "percentage": 1, "sdkVer": "2.20.3" }
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

更新时间：2022 年 5 月 21 日
