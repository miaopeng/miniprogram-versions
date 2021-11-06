
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.20.2

console.log('The most popular version:', mostPopular);
// 2.20.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 2.45, "sdkVer": "2.20.2" },
  { "percentage": 73.57, "sdkVer": "2.20.1" },
  { "percentage": 0.03, "sdkVer": "2.20.0" },
  { "percentage": 13.94, "sdkVer": "2.19.6" },
  { "percentage": 0, "sdkVer": "2.19.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 73.57, "sdkVer": "2.20.1" },
  { "percentage": 13.94, "sdkVer": "2.19.6" },
  { "percentage": 2.45, "sdkVer": "2.20.2" },
  { "percentage": 2.12, "sdkVer": "2.19.2" },
  { "percentage": 1.95, "sdkVer": "2.16.1" }
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

更新时间：2021 年 11 月 6 日
