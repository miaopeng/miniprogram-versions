
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.24.5

console.log('The most popular version:', mostPopular);
// 2.24.5

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 44.56, "sdkVer": "2.24.5" },
  { "percentage": 42.18, "sdkVer": "2.24.4" },
  { "percentage": 0.12, "sdkVer": "2.24.3" },
  { "percentage": 0.03, "sdkVer": "2.24.2" },
  { "percentage": 0.18, "sdkVer": "2.24.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 44.56, "sdkVer": "2.24.5" },
  { "percentage": 42.18, "sdkVer": "2.24.4" },
  { "percentage": 5.34, "sdkVer": "2.23.4" },
  { "percentage": 1.91, "sdkVer": "2.21.4" },
  { "percentage": 1.36, "sdkVer": "2.19.6" }
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

更新时间：2022 年 6 月 4 日
