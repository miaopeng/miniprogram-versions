
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.2.3

console.log('The most popular version:', mostPopular);
// 3.2.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.38, "sdkVer": "3.2.3" },
  { "percentage": 78.94, "sdkVer": "3.2.2" },
  { "percentage": 0.01, "sdkVer": "3.2.1" },
  { "percentage": 0, "sdkVer": "3.2.0" },
  { "percentage": 9.46, "sdkVer": "3.1.5" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 78.94, "sdkVer": "3.2.2" },
  { "percentage": 9.46, "sdkVer": "3.1.5" },
  { "percentage": 2.24, "sdkVer": "3.0.2" },
  { "percentage": 1.67, "sdkVer": "2.33.0" },
  { "percentage": 1.25, "sdkVer": "2.27.3" }
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

更新时间：2023 年 11 月 30 日
