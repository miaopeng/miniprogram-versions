
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.0

console.log('The most popular version:', mostPopular);
// 2.11.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 77.7585325075, "sdkVer": "2.11.0" },
  { "percentage": 15.9501693949, "sdkVer": "2.10.4" },
  { "percentage": 0.307617613279, "sdkVer": "2.10.3" },
  { "percentage": 0.000928742751081, "sdkVer": "2.10.2" },
  { "percentage": 0.0210450634868, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 77.7585325075, "sdkVer": "2.11.0" },
  { "percentage": 15.9501693949, "sdkVer": "2.10.4" },
  { "percentage": 1.77228367534, "sdkVer": "2.9.5" },
  { "percentage": 1.5233683658, "sdkVer": "2.8.3" },
  { "percentage": 0.845802071782, "sdkVer": "2.6.6" }
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

更新时间：2020 年 5 月 2 日
