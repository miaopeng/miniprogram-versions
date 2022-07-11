
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.25.0

console.log('The most popular version:', mostPopular);
// 2.25.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 70.44, "sdkVer": "2.25.0" },
  { "percentage": 14.54, "sdkVer": "2.24.7" },
  { "percentage": 0.02, "sdkVer": "2.24.6" },
  { "percentage": 0.01, "sdkVer": "2.24.5" },
  { "percentage": 4.64, "sdkVer": "2.24.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 70.44, "sdkVer": "2.25.0" },
  { "percentage": 14.54, "sdkVer": "2.24.7" },
  { "percentage": 4.64, "sdkVer": "2.24.4" },
  { "percentage": 3.6, "sdkVer": "2.23.4" },
  { "percentage": 1.63, "sdkVer": "2.21.4" }
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

更新时间：2022 年 7 月 11 日
