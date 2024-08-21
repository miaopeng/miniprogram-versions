
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.5.4

console.log('The most popular version:', mostPopular);
// 3.5.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 44.3, "sdkVer": "3.5.4" },
  { "percentage": 44.68, "sdkVer": "3.5.3" },
  { "percentage": 0.01, "sdkVer": "3.5.2" },
  { "percentage": 0, "sdkVer": "3.5.1" },
  { "percentage": 0, "sdkVer": "3.5.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 44.68, "sdkVer": "3.5.3" },
  { "percentage": 44.3, "sdkVer": "3.5.4" },
  { "percentage": 4.14, "sdkVer": "3.4.10" },
  { "percentage": 2.56, "sdkVer": "3.3.5" },
  { "percentage": 0.82, "sdkVer": "3.1.5" }
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

更新时间：2024 年 8 月 21 日
