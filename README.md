
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.21.3

console.log('The most popular version:', mostPopular);
// 2.21.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 27.13, "sdkVer": "2.21.3" },
  { "percentage": 55.46, "sdkVer": "2.21.2" },
  { "percentage": 0, "sdkVer": "2.21.1" },
  { "percentage": 0, "sdkVer": "2.21.0" },
  { "percentage": 1.37, "sdkVer": "2.20.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 55.46, "sdkVer": "2.21.2" },
  { "percentage": 27.13, "sdkVer": "2.21.3" },
  { "percentage": 7.4, "sdkVer": "2.19.6" },
  { "percentage": 2.81, "sdkVer": "2.20.2" },
  { "percentage": 1.37, "sdkVer": "2.20.3" }
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

更新时间：2022 年 1 月 13 日
