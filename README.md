
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.27.3

console.log('The most popular version:', mostPopular);
// 2.27.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 84.67, "sdkVer": "2.27.3" },
  { "percentage": 0.05, "sdkVer": "2.27.2" },
  { "percentage": 0.02, "sdkVer": "2.27.1" },
  { "percentage": 0.01, "sdkVer": "2.27.0" },
  { "percentage": 2.23, "sdkVer": "2.26.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 84.67, "sdkVer": "2.27.3" },
  { "percentage": 3.59, "sdkVer": "2.25.4" },
  { "percentage": 2.23, "sdkVer": "2.26.2" },
  { "percentage": 2.17, "sdkVer": "2.24.7" },
  { "percentage": 1.67, "sdkVer": "2.23.4" }
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

更新时间：2022 年 11 月 24 日
