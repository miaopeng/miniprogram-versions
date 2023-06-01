
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.32.1

console.log('The most popular version:', mostPopular);
// 2.32.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.61, "sdkVer": "2.32.1" },
  { "percentage": 74.96, "sdkVer": "2.32.0" },
  { "percentage": 7.95, "sdkVer": "2.31.1" },
  { "percentage": 0.01, "sdkVer": "2.31.0" },
  { "percentage": 6.52, "sdkVer": "2.30.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 74.96, "sdkVer": "2.32.0" },
  { "percentage": 7.95, "sdkVer": "2.31.1" },
  { "percentage": 6.52, "sdkVer": "2.30.4" },
  { "percentage": 1.87, "sdkVer": "2.27.3" },
  { "percentage": 1.38, "sdkVer": "2.25.4" }
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

更新时间：2023 年 6 月 1 日
