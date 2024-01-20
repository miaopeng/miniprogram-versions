
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.3.3

console.log('The most popular version:', mostPopular);
// 3.3.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.02, "sdkVer": "3.3.3" },
  { "percentage": 77.14, "sdkVer": "3.3.2" },
  { "percentage": 0.29, "sdkVer": "3.3.1" },
  { "percentage": 4.5, "sdkVer": "3.3.0" },
  { "percentage": 5.74, "sdkVer": "3.2.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 77.14, "sdkVer": "3.3.2" },
  { "percentage": 5.74, "sdkVer": "3.2.5" },
  { "percentage": 4.5, "sdkVer": "3.3.0" },
  { "percentage": 3.64, "sdkVer": "3.1.5" },
  { "percentage": 1.3, "sdkVer": "3.0.2" }
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

更新时间：2024 年 1 月 20 日
