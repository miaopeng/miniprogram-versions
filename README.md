
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.4.1

console.log('The most popular version:', mostPopular);
// 3.4.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 1.42, "sdkVer": "3.4.1" },
  { "percentage": 79.26, "sdkVer": "3.4.0" },
  { "percentage": 9.61, "sdkVer": "3.3.5" },
  { "percentage": 0.3, "sdkVer": "3.3.4" },
  { "percentage": 0, "sdkVer": "3.3.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 79.26, "sdkVer": "3.4.0" },
  { "percentage": 9.61, "sdkVer": "3.3.5" },
  { "percentage": 1.7, "sdkVer": "3.2.5" },
  { "percentage": 1.68, "sdkVer": "3.1.5" },
  { "percentage": 1.42, "sdkVer": "3.4.1" }
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

更新时间：2024 年 4 月 11 日
