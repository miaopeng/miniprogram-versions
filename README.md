
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.2.1

console.log('The most popular version:', mostPopular);
// 3.2.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 40.29, "sdkVer": "3.2.1" },
  { "percentage": 9.27, "sdkVer": "3.2.0" },
  { "percentage": 38.24, "sdkVer": "3.1.5" },
  { "percentage": 0, "sdkVer": "3.1.4" },
  { "percentage": 0, "sdkVer": "3.1.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 40.29, "sdkVer": "3.2.1" },
  { "percentage": 38.24, "sdkVer": "3.1.5" },
  { "percentage": 9.27, "sdkVer": "3.2.0" },
  { "percentage": 3.13, "sdkVer": "3.0.2" },
  { "percentage": 1.74, "sdkVer": "2.33.0" }
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

更新时间：2023 年 11 月 16 日
