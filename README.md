
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.14.1

console.log('The most popular version:', mostPopular);
// 3.14.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 48.33, "sdkVer": "3.14.1" },
  { "percentage": 24.07, "sdkVer": "3.14.0" },
  { "percentage": 15.1, "sdkVer": "3.13.2" },
  { "percentage": 0.03, "sdkVer": "3.13.1" },
  { "percentage": 1.94, "sdkVer": "3.12.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 48.33, "sdkVer": "3.14.1" },
  { "percentage": 24.07, "sdkVer": "3.14.0" },
  { "percentage": 15.1, "sdkVer": "3.13.2" },
  { "percentage": 2.12, "sdkVer": "3.10.3" },
  { "percentage": 1.94, "sdkVer": "3.12.1" }
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

更新时间：2026 年 2 月 1 日
