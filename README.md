
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.32.2

console.log('The most popular version:', mostPopular);
// 2.32.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 10.94, "sdkVer": "2.32.2" },
  { "percentage": 69.64, "sdkVer": "2.32.1" },
  { "percentage": 0.13, "sdkVer": "2.32.0" },
  { "percentage": 5.04, "sdkVer": "2.31.1" },
  { "percentage": 0.07, "sdkVer": "2.31.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 69.64, "sdkVer": "2.32.1" },
  { "percentage": 10.94, "sdkVer": "2.32.2" },
  { "percentage": 5.51, "sdkVer": "2.30.4" },
  { "percentage": 5.04, "sdkVer": "2.31.1" },
  { "percentage": 1.66, "sdkVer": "2.27.3" }
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

更新时间：2023 年 6 月 10 日
