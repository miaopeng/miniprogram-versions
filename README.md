
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.29.2

console.log('The most popular version:', mostPopular);
// 2.29.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.53, "sdkVer": "2.29.2" },
  { "percentage": 76.23, "sdkVer": "2.29.1" },
  { "percentage": 0.05, "sdkVer": "2.29.0" },
  { "percentage": 7.24, "sdkVer": "2.28.1" },
  { "percentage": 0, "sdkVer": "2.28.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 76.23, "sdkVer": "2.29.1" },
  { "percentage": 7.24, "sdkVer": "2.28.1" },
  { "percentage": 5.25, "sdkVer": "2.27.3" },
  { "percentage": 2.46, "sdkVer": "2.25.4" },
  { "percentage": 1.57, "sdkVer": "2.24.7" }
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

更新时间：2023 年 1 月 11 日
