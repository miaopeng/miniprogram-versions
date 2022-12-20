
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.29.0

console.log('The most popular version:', mostPopular);
// 2.28.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 5.29, "sdkVer": "2.29.0" },
  { "percentage": 74.13, "sdkVer": "2.28.1" },
  { "percentage": 0.04, "sdkVer": "2.28.0" },
  { "percentage": 8.54, "sdkVer": "2.27.3" },
  { "percentage": 0.01, "sdkVer": "2.27.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 74.13, "sdkVer": "2.28.1" },
  { "percentage": 8.54, "sdkVer": "2.27.3" },
  { "percentage": 5.29, "sdkVer": "2.29.0" },
  { "percentage": 2.81, "sdkVer": "2.25.4" },
  { "percentage": 1.8, "sdkVer": "2.24.7" }
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

更新时间：2022 年 12 月 20 日
