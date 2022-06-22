
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.24.6

console.log('The most popular version:', mostPopular);
// 2.24.6

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 74.26, "sdkVer": "2.24.6" },
  { "percentage": 8.3, "sdkVer": "2.24.5" },
  { "percentage": 6.43, "sdkVer": "2.24.4" },
  { "percentage": 0, "sdkVer": "2.24.3" },
  { "percentage": 0, "sdkVer": "2.24.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 74.26, "sdkVer": "2.24.6" },
  { "percentage": 8.3, "sdkVer": "2.24.5" },
  { "percentage": 6.43, "sdkVer": "2.24.4" },
  { "percentage": 3.99, "sdkVer": "2.23.4" },
  { "percentage": 1.7, "sdkVer": "2.21.4" }
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

更新时间：2022 年 6 月 22 日
