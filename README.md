
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.29.1

console.log('The most popular version:', mostPopular);
// 2.29.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0, "sdkVer": "2.29.1" },
  { "percentage": 71.86, "sdkVer": "2.29.0" },
  { "percentage": 10.69, "sdkVer": "2.28.1" },
  { "percentage": 0.01, "sdkVer": "2.28.0" },
  { "percentage": 6.22, "sdkVer": "2.27.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 71.86, "sdkVer": "2.29.0" },
  { "percentage": 10.69, "sdkVer": "2.28.1" },
  { "percentage": 6.22, "sdkVer": "2.27.3" },
  { "percentage": 2.63, "sdkVer": "2.25.4" },
  { "percentage": 1.68, "sdkVer": "2.24.7" }
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

更新时间：2023 年 1 月 3 日
