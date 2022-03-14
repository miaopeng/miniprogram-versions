
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
  { "percentage": 5.25, "sdkVer": "2.23.0" },
  { "percentage": 82.02, "sdkVer": "2.22.1" },
  { "percentage": 0.03, "sdkVer": "2.22.0" },
  { "percentage": 3.81, "sdkVer": "2.21.4" },
  { "percentage": 0.02, "sdkVer": "2.21.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.02, "sdkVer": "2.22.1" },
  { "percentage": 5.25, "sdkVer": "2.23.0" },
  { "percentage": 3.81, "sdkVer": "2.21.4" },
  { "percentage": 2.54, "sdkVer": "2.19.6" },
  { "percentage": 1.51, "sdkVer": "2.20.3" }
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

更新时间：2022 年 3 月 14 日
