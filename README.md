
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.1.1

console.log('The most popular version:', mostPopular);
// 3.1.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 13.64, "sdkVer": "3.1.1" },
  { "percentage": 64.37, "sdkVer": "3.1.0" },
  { "percentage": 9.51, "sdkVer": "3.0.2" },
  { "percentage": 0.01, "sdkVer": "3.0.1" },
  { "percentage": 0.07, "sdkVer": "3.0.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 64.37, "sdkVer": "3.1.0" },
  { "percentage": 13.64, "sdkVer": "3.1.1" },
  { "percentage": 9.51, "sdkVer": "3.0.2" },
  { "percentage": 3.12, "sdkVer": "2.33.0" },
  { "percentage": 1.72, "sdkVer": "2.30.4" }
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

更新时间：2023 年 9 月 26 日
