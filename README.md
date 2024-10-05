
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.6.1

console.log('The most popular version:', mostPopular);
// 3.5.8

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0, "sdkVer": "3.6.1" },
  { "percentage": 22.5, "sdkVer": "3.6.0" },
  { "percentage": 67.45, "sdkVer": "3.5.8" },
  { "percentage": 0.01, "sdkVer": "3.5.7" },
  { "percentage": 0, "sdkVer": "3.5.6" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 67.45, "sdkVer": "3.5.8" },
  { "percentage": 22.5, "sdkVer": "3.6.0" },
  { "percentage": 2.88, "sdkVer": "3.4.10" },
  { "percentage": 2.47, "sdkVer": "3.3.5" },
  { "percentage": 0.9, "sdkVer": "3.1.5" }
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

更新时间：2024 年 10 月 5 日
