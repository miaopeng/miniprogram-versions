
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.1.2

console.log('The most popular version:', mostPopular);
// 3.1.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 31.34, "sdkVer": "3.1.2" },
  { "percentage": 50.37, "sdkVer": "3.1.1" },
  { "percentage": 0.18, "sdkVer": "3.1.0" },
  { "percentage": 7.63, "sdkVer": "3.0.2" },
  { "percentage": 0.02, "sdkVer": "3.0.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 50.37, "sdkVer": "3.1.1" },
  { "percentage": 31.34, "sdkVer": "3.1.2" },
  { "percentage": 7.63, "sdkVer": "3.0.2" },
  { "percentage": 2.59, "sdkVer": "2.33.0" },
  { "percentage": 1.45, "sdkVer": "2.30.4" }
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

更新时间：2023 年 9 月 29 日
