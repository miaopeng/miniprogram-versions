
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.27.1

console.log('The most popular version:', mostPopular);
// 2.27.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 4.5, "sdkVer": "2.27.1" },
  { "percentage": 77.8, "sdkVer": "2.27.0" },
  { "percentage": 3.02, "sdkVer": "2.26.2" },
  { "percentage": 0.01, "sdkVer": "2.26.1" },
  { "percentage": 0, "sdkVer": "2.26.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 77.8, "sdkVer": "2.27.0" },
  { "percentage": 4.5, "sdkVer": "2.27.1" },
  { "percentage": 4.16, "sdkVer": "2.25.4" },
  { "percentage": 3.02, "sdkVer": "2.26.2" },
  { "percentage": 2.42, "sdkVer": "2.24.7" }
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

更新时间：2022 年 11 月 3 日
