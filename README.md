
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.4.9

console.log('The most popular version:', mostPopular);
// 3.4.8

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 1.93, "sdkVer": "3.4.9" },
  { "percentage": 85.46, "sdkVer": "3.4.8" },
  { "percentage": 0.19, "sdkVer": "3.4.7" },
  { "percentage": 0.13, "sdkVer": "3.4.6" },
  { "percentage": 0, "sdkVer": "3.4.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 85.46, "sdkVer": "3.4.8" },
  { "percentage": 5.34, "sdkVer": "3.3.5" },
  { "percentage": 1.93, "sdkVer": "3.4.9" },
  { "percentage": 1.3, "sdkVer": "3.1.5" },
  { "percentage": 1, "sdkVer": "2.27.3" }
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

更新时间：2024 年 7 月 2 日
