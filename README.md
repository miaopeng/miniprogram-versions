
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.15.2

console.log('The most popular version:', mostPopular);
// 3.15.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 88.92, "sdkVer": "3.15.2" },
  { "percentage": 0.05, "sdkVer": "3.15.1" },
  { "percentage": 1.28, "sdkVer": "3.14.3" },
  { "percentage": 1.44, "sdkVer": "3.13.2" },
  { "percentage": 0.8, "sdkVer": "3.12.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 88.92, "sdkVer": "3.15.2" },
  { "percentage": 1.65, "sdkVer": "3.8.12" },
  { "percentage": 1.44, "sdkVer": "3.13.2" },
  { "percentage": 1.31, "sdkVer": "3.10.3" },
  { "percentage": 1.28, "sdkVer": "3.14.3" }
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

更新时间：2026 年 5 月 1 日
