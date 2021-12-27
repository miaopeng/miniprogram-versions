
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.21.2

console.log('The most popular version:', mostPopular);
// 2.21.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 77.1, "sdkVer": "2.21.2" },
  { "percentage": 0.08, "sdkVer": "2.21.1" },
  { "percentage": 0.01, "sdkVer": "2.21.0" },
  { "percentage": 0, "sdkVer": "2.20.3" },
  { "percentage": 4.83, "sdkVer": "2.20.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 77.1, "sdkVer": "2.21.2" },
  { "percentage": 10.06, "sdkVer": "2.19.6" },
  { "percentage": 4.83, "sdkVer": "2.20.2" },
  { "percentage": 1.68, "sdkVer": "2.19.2" },
  { "percentage": 1.51, "sdkVer": "2.16.1" }
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

更新时间：2021 年 12 月 27 日
