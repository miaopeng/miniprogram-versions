
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.23.3

console.log('The most popular version:', mostPopular);
// 2.23.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 87.93, "sdkVer": "2.23.3" },
  { "percentage": 0.21, "sdkVer": "2.23.2" },
  { "percentage": 0.01, "sdkVer": "2.23.1" },
  { "percentage": 0.01, "sdkVer": "2.23.0" },
  { "percentage": 0.88, "sdkVer": "2.22.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 87.93, "sdkVer": "2.23.3" },
  { "percentage": 3.05, "sdkVer": "2.21.4" },
  { "percentage": 2.12, "sdkVer": "2.19.6" },
  { "percentage": 1.3, "sdkVer": "2.20.3" },
  { "percentage": 0.95, "sdkVer": "2.19.2" }
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

更新时间：2022 年 4 月 6 日
