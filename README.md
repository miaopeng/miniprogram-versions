
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.3

console.log('The most popular version:', mostPopular);
// 3.7.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 4.49, "sdkVer": "3.7.3" },
  { "percentage": 77.01, "sdkVer": "3.7.2" },
  { "percentage": 0.02, "sdkVer": "3.7.1" },
  { "percentage": 0.01, "sdkVer": "3.7.0" },
  { "percentage": 8.33, "sdkVer": "3.6.6" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 77.01, "sdkVer": "3.7.2" },
  { "percentage": 8.33, "sdkVer": "3.6.6" },
  { "percentage": 4.49, "sdkVer": "3.7.3" },
  { "percentage": 2.91, "sdkVer": "3.5.8" },
  { "percentage": 1.71, "sdkVer": "3.3.5" }
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

更新时间：2024 年 12 月 28 日
