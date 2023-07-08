
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.33.0

console.log('The most popular version:', mostPopular);
// 2.32.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 29.52, "sdkVer": "2.33.0" },
  { "percentage": 59.4, "sdkVer": "2.32.3" },
  { "percentage": 0.02, "sdkVer": "2.32.2" },
  { "percentage": 0.06, "sdkVer": "2.32.1" },
  { "percentage": 0.01, "sdkVer": "2.32.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 59.4, "sdkVer": "2.32.3" },
  { "percentage": 29.52, "sdkVer": "2.33.0" },
  { "percentage": 2.99, "sdkVer": "2.30.4" },
  { "percentage": 1.53, "sdkVer": "2.31.1" },
  { "percentage": 1.25, "sdkVer": "2.27.3" }
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

更新时间：2023 年 7 月 8 日
