
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.12.0

console.log('The most popular version:', mostPopular);
// 3.11.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 4.5, "sdkVer": "3.12.0" },
  { "percentage": 81.15, "sdkVer": "3.11.3" },
  { "percentage": 0.73, "sdkVer": "3.11.2" },
  { "percentage": 0.04, "sdkVer": "3.11.1" },
  { "percentage": 0.01, "sdkVer": "3.11.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 81.15, "sdkVer": "3.11.3" },
  { "percentage": 4.58, "sdkVer": "3.10.3" },
  { "percentage": 4.5, "sdkVer": "3.12.0" },
  { "percentage": 2.84, "sdkVer": "3.8.12" },
  { "percentage": 1.79, "sdkVer": "3.9.3" }
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

更新时间：2025 年 12 月 1 日
