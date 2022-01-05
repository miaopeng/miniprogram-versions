
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.21.3

console.log('The most popular version:', mostPopular);
// 2.21.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.06, "sdkVer": "2.21.3" },
  { "percentage": 78.26, "sdkVer": "2.21.2" },
  { "percentage": 0.01, "sdkVer": "2.21.1" },
  { "percentage": 0.01, "sdkVer": "2.21.0" },
  { "percentage": 0.05, "sdkVer": "2.20.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 78.26, "sdkVer": "2.21.2" },
  { "percentage": 9.68, "sdkVer": "2.19.6" },
  { "percentage": 4.27, "sdkVer": "2.20.2" },
  { "percentage": 1.63, "sdkVer": "2.19.2" },
  { "percentage": 1.45, "sdkVer": "2.16.1" }
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

更新时间：2022 年 1 月 5 日
