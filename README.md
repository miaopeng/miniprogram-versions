
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.2

console.log('The most popular version:', mostPopular);
// 3.7.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 80.39, "sdkVer": "3.7.2" },
  { "percentage": 0.07, "sdkVer": "3.7.1" },
  { "percentage": 0.01, "sdkVer": "3.7.0" },
  { "percentage": 9.23, "sdkVer": "3.6.6" },
  { "percentage": 0, "sdkVer": "3.6.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 80.39, "sdkVer": "3.7.2" },
  { "percentage": 9.23, "sdkVer": "3.6.6" },
  { "percentage": 2.97, "sdkVer": "3.5.8" },
  { "percentage": 1.74, "sdkVer": "3.3.5" },
  { "percentage": 1.58, "sdkVer": "3.4.10" }
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

更新时间：2024 年 12 月 24 日
