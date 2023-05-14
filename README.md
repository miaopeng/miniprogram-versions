
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.32.0

console.log('The most popular version:', mostPopular);
// 2.31.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 3.94, "sdkVer": "2.32.0" },
  { "percentage": 77.19, "sdkVer": "2.31.1" },
  { "percentage": 0.12, "sdkVer": "2.31.0" },
  { "percentage": 8.31, "sdkVer": "2.30.4" },
  { "percentage": 0.12, "sdkVer": "2.30.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 77.19, "sdkVer": "2.31.1" },
  { "percentage": 8.31, "sdkVer": "2.30.4" },
  { "percentage": 3.94, "sdkVer": "2.32.0" },
  { "percentage": 1.78, "sdkVer": "2.27.3" },
  { "percentage": 1.43, "sdkVer": "2.25.4" }
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

更新时间：2023 年 5 月 14 日
