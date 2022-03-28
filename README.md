
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.23.2

console.log('The most popular version:', mostPopular);
// 2.23.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 87.06, "sdkVer": "2.23.2" },
  { "percentage": 0.48, "sdkVer": "2.23.1" },
  { "percentage": 0.01, "sdkVer": "2.23.0" },
  { "percentage": 0.95, "sdkVer": "2.22.1" },
  { "percentage": 0.01, "sdkVer": "2.22.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 87.06, "sdkVer": "2.23.2" },
  { "percentage": 3.28, "sdkVer": "2.21.4" },
  { "percentage": 2.23, "sdkVer": "2.19.6" },
  { "percentage": 1.36, "sdkVer": "2.20.3" },
  { "percentage": 0.97, "sdkVer": "2.19.2" }
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

更新时间：2022 年 3 月 28 日
