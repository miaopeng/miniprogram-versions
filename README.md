
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.23.0

console.log('The most popular version:', mostPopular);
// 2.22.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 5.33, "sdkVer": "2.23.0" },
  { "percentage": 82.07, "sdkVer": "2.22.1" },
  { "percentage": 0.04, "sdkVer": "2.22.0" },
  { "percentage": 3.8, "sdkVer": "2.21.4" },
  { "percentage": 0.01, "sdkVer": "2.21.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.07, "sdkVer": "2.22.1" },
  { "percentage": 5.33, "sdkVer": "2.23.0" },
  { "percentage": 3.8, "sdkVer": "2.21.4" },
  { "percentage": 2.47, "sdkVer": "2.19.6" },
  { "percentage": 1.49, "sdkVer": "2.20.3" }
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

更新时间：2022 年 3 月 12 日
