
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.8.4

console.log('The most popular version:', mostPopular);
// 3.8.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 5.75, "sdkVer": "3.8.4" },
  { "percentage": 43.68, "sdkVer": "3.8.3" },
  { "percentage": 0.01, "sdkVer": "3.8.2" },
  { "percentage": 0, "sdkVer": "3.8.1" },
  { "percentage": 0.21, "sdkVer": "3.8.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 43.68, "sdkVer": "3.8.3" },
  { "percentage": 20.91, "sdkVer": "3.7.12" },
  { "percentage": 9.16, "sdkVer": "3.6.6" },
  { "percentage": 5.75, "sdkVer": "3.8.4" },
  { "percentage": 4.07, "sdkVer": "3.5.8" }
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

更新时间：2025 年 5 月 15 日
