
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.6.0

console.log('The most popular version:', mostPopular);
// 3.5.8

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.64, "sdkVer": "3.6.0" },
  { "percentage": 88.55, "sdkVer": "3.5.8" },
  { "percentage": 0.17, "sdkVer": "3.5.7" },
  { "percentage": 0.02, "sdkVer": "3.5.6" },
  { "percentage": 0.01, "sdkVer": "3.5.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 88.55, "sdkVer": "3.5.8" },
  { "percentage": 3.1, "sdkVer": "3.4.10" },
  { "percentage": 2.54, "sdkVer": "3.3.5" },
  { "percentage": 0.96, "sdkVer": "2.27.3" },
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

更新时间：2024 年 9 月 27 日
