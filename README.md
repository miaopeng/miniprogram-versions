
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.2.1

console.log('The most popular version:', mostPopular);
// 3.2.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 7.07, "sdkVer": "3.2.1" },
  { "percentage": 41.24, "sdkVer": "3.2.0" },
  { "percentage": 39.26, "sdkVer": "3.1.5" },
  { "percentage": 0.01, "sdkVer": "3.1.4" },
  { "percentage": 0, "sdkVer": "3.1.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 41.24, "sdkVer": "3.2.0" },
  { "percentage": 39.26, "sdkVer": "3.1.5" },
  { "percentage": 7.07, "sdkVer": "3.2.1" },
  { "percentage": 3.21, "sdkVer": "3.0.2" },
  { "percentage": 1.78, "sdkVer": "2.33.0" }
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

更新时间：2023 年 11 月 15 日
