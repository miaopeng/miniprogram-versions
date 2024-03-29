
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.4.0

console.log('The most popular version:', mostPopular);
// 3.3.5

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.64, "sdkVer": "3.4.0" },
  { "percentage": 89.77, "sdkVer": "3.3.5" },
  { "percentage": 0.35, "sdkVer": "3.3.4" },
  { "percentage": 0, "sdkVer": "3.3.3" },
  { "percentage": 0, "sdkVer": "3.3.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 89.77, "sdkVer": "3.3.5" },
  { "percentage": 1.75, "sdkVer": "3.2.5" },
  { "percentage": 1.67, "sdkVer": "3.1.5" },
  { "percentage": 1.07, "sdkVer": "2.27.3" },
  { "percentage": 0.71, "sdkVer": "2.33.0" }
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

更新时间：2024 年 3 月 29 日
