
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.0

console.log('The most popular version:', mostPopular);
// 3.6.6

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.32, "sdkVer": "3.7.0" },
  { "percentage": 87.26, "sdkVer": "3.6.6" },
  { "percentage": 0.65, "sdkVer": "3.6.5" },
  { "percentage": 0, "sdkVer": "3.6.4" },
  { "percentage": 0.12, "sdkVer": "3.6.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 87.26, "sdkVer": "3.6.6" },
  { "percentage": 3.76, "sdkVer": "3.5.8" },
  { "percentage": 1.89, "sdkVer": "3.3.5" },
  { "percentage": 1.77, "sdkVer": "3.4.10" },
  { "percentage": 0.95, "sdkVer": "2.27.3" }
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

更新时间：2024 年 11 月 29 日
