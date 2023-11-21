
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.2.2

console.log('The most popular version:', mostPopular);
// 3.2.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 12.26, "sdkVer": "3.2.2" },
  { "percentage": 51.71, "sdkVer": "3.2.1" },
  { "percentage": 0.05, "sdkVer": "3.2.0" },
  { "percentage": 24.54, "sdkVer": "3.1.5" },
  { "percentage": 0, "sdkVer": "3.1.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 51.71, "sdkVer": "3.2.1" },
  { "percentage": 24.54, "sdkVer": "3.1.5" },
  { "percentage": 12.26, "sdkVer": "3.2.2" },
  { "percentage": 2.86, "sdkVer": "3.0.2" },
  { "percentage": 1.64, "sdkVer": "2.33.0" }
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

更新时间：2023 年 11 月 21 日
