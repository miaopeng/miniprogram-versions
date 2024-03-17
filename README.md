
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.3.5

console.log('The most popular version:', mostPopular);
// 3.3.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.04, "sdkVer": "3.3.5" },
  { "percentage": 89.3, "sdkVer": "3.3.4" },
  { "percentage": 0.13, "sdkVer": "3.3.3" },
  { "percentage": 0, "sdkVer": "3.3.2" },
  { "percentage": 0, "sdkVer": "3.3.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 89.3, "sdkVer": "3.3.4" },
  { "percentage": 1.93, "sdkVer": "3.1.5" },
  { "percentage": 1.22, "sdkVer": "3.2.5" },
  { "percentage": 1.01, "sdkVer": "2.27.3" },
  { "percentage": 0.9, "sdkVer": "3.3.0" }
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

更新时间：2024 年 3 月 17 日
