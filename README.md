
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.20.0

console.log('The most popular version:', mostPopular);
// 2.19.6

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 39.05, "sdkVer": "2.20.0" },
  { "percentage": 48.19, "sdkVer": "2.19.6" },
  { "percentage": 0.09, "sdkVer": "2.19.5" },
  { "percentage": 0.01, "sdkVer": "2.19.4" },
  { "percentage": 0.08, "sdkVer": "2.19.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 48.19, "sdkVer": "2.19.6" },
  { "percentage": 39.05, "sdkVer": "2.20.0" },
  { "percentage": 2.83, "sdkVer": "2.19.2" },
  { "percentage": 2.43, "sdkVer": "2.16.1" },
  { "percentage": 1.81, "sdkVer": "2.17.0" }
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

更新时间：2021 年 10 月 3 日
