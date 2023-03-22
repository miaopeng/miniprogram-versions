
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.30.3

console.log('The most popular version:', mostPopular);
// 2.30.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 25.37, "sdkVer": "2.30.3" },
  { "percentage": 63.97, "sdkVer": "2.30.2" },
  { "percentage": 0.01, "sdkVer": "2.30.1" },
  { "percentage": 0.2, "sdkVer": "2.30.0" },
  { "percentage": 1.59, "sdkVer": "2.29.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 63.97, "sdkVer": "2.30.2" },
  { "percentage": 25.37, "sdkVer": "2.30.3" },
  { "percentage": 1.87, "sdkVer": "2.27.3" },
  { "percentage": 1.59, "sdkVer": "2.29.2" },
  { "percentage": 1.3, "sdkVer": "2.25.4" }
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

更新时间：2023 年 3 月 22 日
