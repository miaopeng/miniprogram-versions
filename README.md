
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.15.0

console.log('The most popular version:', mostPopular);
// 2.14.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.02, "sdkVer": "2.15.0" },
  { "percentage": 83.55, "sdkVer": "2.14.4" },
  { "percentage": 0.01, "sdkVer": "2.14.3" },
  { "percentage": 8.13, "sdkVer": "2.14.1" },
  { "percentage": 0, "sdkVer": "2.14.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 83.55, "sdkVer": "2.14.4" },
  { "percentage": 8.13, "sdkVer": "2.14.1" },
  { "percentage": 3.09, "sdkVer": "2.12.2" },
  { "percentage": 1.53, "sdkVer": "2.10.4" },
  { "percentage": 1.22, "sdkVer": "2.13.2" }
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

更新时间：2021 年 1 月 29 日
