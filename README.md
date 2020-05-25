
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.1

console.log('The most popular version:', mostPopular);
// 2.11.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 25.2640292071, "sdkVer": "2.11.1" },
  { "percentage": 57.3498530104, "sdkVer": "2.11.0" },
  { "percentage": 12.0865111094, "sdkVer": "2.10.4" },
  { "percentage": 0.175093731726, "sdkVer": "2.10.3" },
  { "percentage": 0.000294947150097, "sdkVer": "2.10.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 57.3498530104, "sdkVer": "2.11.0" },
  { "percentage": 25.2640292071, "sdkVer": "2.11.1" },
  { "percentage": 12.0865111094, "sdkVer": "2.10.4" },
  { "percentage": 1.51668340296, "sdkVer": "2.9.5" },
  { "percentage": 1.29930447346, "sdkVer": "2.8.3" }
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

更新时间：2020 年 5 月 25 日
