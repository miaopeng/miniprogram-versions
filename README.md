
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.14.3

console.log('The most popular version:', mostPopular);
// 3.14.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.01, "sdkVer": "3.14.3" },
  { "percentage": 84.8, "sdkVer": "3.14.2" },
  { "percentage": 0.01, "sdkVer": "3.14.1" },
  { "percentage": 3.96, "sdkVer": "3.13.2" },
  { "percentage": 1.34, "sdkVer": "3.12.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 84.8, "sdkVer": "3.14.2" },
  { "percentage": 3.96, "sdkVer": "3.13.2" },
  { "percentage": 2.03, "sdkVer": "3.8.12" },
  { "percentage": 1.86, "sdkVer": "3.10.3" },
  { "percentage": 1.45, "sdkVer": "3.11.3" }
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

更新时间：2026 年 3 月 1 日
