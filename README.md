
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.24.2

console.log('The most popular version:', mostPopular);
// 2.24.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.27, "sdkVer": "2.24.2" },
  { "percentage": 82.63, "sdkVer": "2.24.1" },
  { "percentage": 0.03, "sdkVer": "2.24.0" },
  { "percentage": 0.1, "sdkVer": "2.23.5" },
  { "percentage": 7.56, "sdkVer": "2.23.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.63, "sdkVer": "2.24.1" },
  { "percentage": 7.56, "sdkVer": "2.23.4" },
  { "percentage": 2.36, "sdkVer": "2.21.4" },
  { "percentage": 1.64, "sdkVer": "2.19.6" },
  { "percentage": 1.06, "sdkVer": "2.20.3" }
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

更新时间：2022 年 5 月 7 日
