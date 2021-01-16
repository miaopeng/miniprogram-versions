
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.14.4

console.log('The most popular version:', mostPopular);
// 2.14.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 1.99, "sdkVer": "2.14.4" },
  { "percentage": 74.64, "sdkVer": "2.14.3" },
  { "percentage": 13.15, "sdkVer": "2.14.1" },
  { "percentage": 0, "sdkVer": "2.14.0" },
  { "percentage": 1.7, "sdkVer": "2.13.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 74.64, "sdkVer": "2.14.3" },
  { "percentage": 13.15, "sdkVer": "2.14.1" },
  { "percentage": 4.06, "sdkVer": "2.12.2" },
  { "percentage": 1.99, "sdkVer": "2.14.4" },
  { "percentage": 1.77, "sdkVer": "2.10.4" }
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

更新时间：2021 年 1 月 16 日
