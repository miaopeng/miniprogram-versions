
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.8.3

console.log('The most popular version:', mostPopular);
// 3.8.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.02, "sdkVer": "3.8.3" },
  { "percentage": 43.33, "sdkVer": "3.8.2" },
  { "percentage": 0.17, "sdkVer": "3.8.1" },
  { "percentage": 0.21, "sdkVer": "3.8.0" },
  { "percentage": 26.55, "sdkVer": "3.7.12" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 43.33, "sdkVer": "3.8.2" },
  { "percentage": 26.55, "sdkVer": "3.7.12" },
  { "percentage": 9.65, "sdkVer": "3.6.6" },
  { "percentage": 4.16, "sdkVer": "3.5.8" },
  { "percentage": 3.4, "sdkVer": "3.3.5" }
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

更新时间：2025 年 5 月 1 日
