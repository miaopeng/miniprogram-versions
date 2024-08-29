
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.5.5

console.log('The most popular version:', mostPopular);
// 3.5.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 41.08, "sdkVer": "3.5.5" },
  { "percentage": 47.9, "sdkVer": "3.5.4" },
  { "percentage": 0.1, "sdkVer": "3.5.3" },
  { "percentage": 0, "sdkVer": "3.5.2" },
  { "percentage": 0, "sdkVer": "3.5.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 47.9, "sdkVer": "3.5.4" },
  { "percentage": 41.08, "sdkVer": "3.5.5" },
  { "percentage": 3.86, "sdkVer": "3.4.10" },
  { "percentage": 2.58, "sdkVer": "3.3.5" },
  { "percentage": 0.84, "sdkVer": "3.1.5" }
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

更新时间：2024 年 8 月 29 日
