
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.8.3

console.log('The most popular version:', mostPopular);
// 3.8.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 48.74, "sdkVer": "3.8.3" },
  { "percentage": 0.13, "sdkVer": "3.8.2" },
  { "percentage": 0, "sdkVer": "3.8.1" },
  { "percentage": 0.14, "sdkVer": "3.8.0" },
  { "percentage": 21.98, "sdkVer": "3.7.12" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 48.74, "sdkVer": "3.8.3" },
  { "percentage": 21.98, "sdkVer": "3.7.12" },
  { "percentage": 9.32, "sdkVer": "3.6.6" },
  { "percentage": 4.12, "sdkVer": "3.5.8" },
  { "percentage": 3.39, "sdkVer": "3.3.5" }
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

更新时间：2025 年 5 月 11 日
