
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.8.1

console.log('The most popular version:', mostPopular);
// 3.8.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 2.49, "sdkVer": "3.8.1" },
  { "percentage": 79.63, "sdkVer": "3.8.0" },
  { "percentage": 8.79, "sdkVer": "3.7.12" },
  { "percentage": 0, "sdkVer": "3.7.11" },
  { "percentage": 0, "sdkVer": "3.7.10" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 79.63, "sdkVer": "3.8.0" },
  { "percentage": 8.79, "sdkVer": "3.7.12" },
  { "percentage": 2.98, "sdkVer": "3.6.6" },
  { "percentage": 2.49, "sdkVer": "3.8.1" },
  { "percentage": 1.25, "sdkVer": "3.5.8" }
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

更新时间：2025 年 4 月 22 日
