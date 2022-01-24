
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.21.4

console.log('The most popular version:', mostPopular);
// 2.21.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 16.63, "sdkVer": "2.21.4" },
  { "percentage": 66.66, "sdkVer": "2.21.3" },
  { "percentage": 0.02, "sdkVer": "2.21.2" },
  { "percentage": 0, "sdkVer": "2.21.1" },
  { "percentage": 0.08, "sdkVer": "2.21.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 66.66, "sdkVer": "2.21.3" },
  { "percentage": 16.63, "sdkVer": "2.21.4" },
  { "percentage": 7.65, "sdkVer": "2.19.6" },
  { "percentage": 2.12, "sdkVer": "2.20.2" },
  { "percentage": 1.3, "sdkVer": "2.19.2" }
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

更新时间：2022 年 1 月 24 日
