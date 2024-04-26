
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.4.3

console.log('The most popular version:', mostPopular);
// 3.4.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.09, "sdkVer": "3.4.3" },
  { "percentage": 83.02, "sdkVer": "3.4.2" },
  { "percentage": 0.98, "sdkVer": "3.4.1" },
  { "percentage": 0.02, "sdkVer": "3.4.0" },
  { "percentage": 6.74, "sdkVer": "3.3.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 83.02, "sdkVer": "3.4.2" },
  { "percentage": 6.74, "sdkVer": "3.3.5" },
  { "percentage": 1.58, "sdkVer": "3.1.5" },
  { "percentage": 1.54, "sdkVer": "3.2.5" },
  { "percentage": 1.13, "sdkVer": "2.27.3" }
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

更新时间：2024 年 4 月 26 日
