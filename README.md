
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.1.3

console.log('The most popular version:', mostPopular);
// 3.1.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.31, "sdkVer": "3.1.3" },
  { "percentage": 82.39, "sdkVer": "3.1.2" },
  { "percentage": 0, "sdkVer": "3.1.1" },
  { "percentage": 0.01, "sdkVer": "3.1.0" },
  { "percentage": 5.45, "sdkVer": "3.0.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.39, "sdkVer": "3.1.2" },
  { "percentage": 5.45, "sdkVer": "3.0.2" },
  { "percentage": 2.65, "sdkVer": "2.33.0" },
  { "percentage": 1.66, "sdkVer": "2.30.4" },
  { "percentage": 1.29, "sdkVer": "2.27.3" }
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

更新时间：2023 年 10 月 16 日
