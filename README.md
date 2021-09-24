
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.19.5

console.log('The most popular version:', mostPopular);
// 2.19.5

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 86.04, "sdkVer": "2.19.5" },
  { "percentage": 0.04, "sdkVer": "2.19.4" },
  { "percentage": 0.01, "sdkVer": "2.19.3" },
  { "percentage": 3.25, "sdkVer": "2.19.2" },
  { "percentage": 0.15, "sdkVer": "2.19.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 86.04, "sdkVer": "2.19.5" },
  { "percentage": 3.25, "sdkVer": "2.19.2" },
  { "percentage": 2.6, "sdkVer": "2.16.1" },
  { "percentage": 2, "sdkVer": "2.18.1" },
  { "percentage": 2, "sdkVer": "2.17.0" }
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

更新时间：2021 年 9 月 24 日
