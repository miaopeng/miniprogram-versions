
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.26.0

console.log('The most popular version:', mostPopular);
// 2.25.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 24.72, "sdkVer": "2.26.0" },
  { "percentage": 63.1, "sdkVer": "2.25.4" },
  { "percentage": 0.01, "sdkVer": "2.25.3" },
  { "percentage": 0.2, "sdkVer": "2.25.2" },
  { "percentage": 0, "sdkVer": "2.25.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 63.1, "sdkVer": "2.25.4" },
  { "percentage": 24.72, "sdkVer": "2.26.0" },
  { "percentage": 3.35, "sdkVer": "2.24.7" },
  { "percentage": 2.11, "sdkVer": "2.24.4" },
  { "percentage": 2.08, "sdkVer": "2.23.4" }
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

更新时间：2022 年 9 月 6 日
