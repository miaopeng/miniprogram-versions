
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.1

console.log('The most popular version:', mostPopular);
// 3.7.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 10.59, "sdkVer": "3.7.1" },
  { "percentage": 65.59, "sdkVer": "3.7.0" },
  { "percentage": 13.57, "sdkVer": "3.6.6" },
  { "percentage": 0.01, "sdkVer": "3.6.5" },
  { "percentage": 0, "sdkVer": "3.6.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 65.59, "sdkVer": "3.7.0" },
  { "percentage": 13.57, "sdkVer": "3.6.6" },
  { "percentage": 10.59, "sdkVer": "3.7.1" },
  { "percentage": 3.04, "sdkVer": "3.5.8" },
  { "percentage": 1.69, "sdkVer": "3.3.5" }
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

更新时间：2024 年 12 月 13 日
