
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.2

console.log('The most popular version:', mostPopular);
// 2.11.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 1.95, "sdkVer": "2.11.2" },
  { "percentage": 84.58, "sdkVer": "2.11.1" },
  { "percentage": 0.06, "sdkVer": "2.11.0" },
  { "percentage": 8.88, "sdkVer": "2.10.4" },
  { "percentage": 0.07, "sdkVer": "2.10.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 84.58, "sdkVer": "2.11.1" },
  { "percentage": 8.88, "sdkVer": "2.10.4" },
  { "percentage": 1.95, "sdkVer": "2.11.2" },
  { "percentage": 1.31, "sdkVer": "2.9.5" },
  { "percentage": 1.13, "sdkVer": "2.8.3" }
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

更新时间：2020 年 6 月 14 日
