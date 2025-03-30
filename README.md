
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.12

console.log('The most popular version:', mostPopular);
// 3.7.12

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 89.44, "sdkVer": "3.7.12" },
  { "percentage": 0.89, "sdkVer": "3.7.11" },
  { "percentage": 0.07, "sdkVer": "3.7.10" },
  { "percentage": 0, "sdkVer": "3.7.9" },
  { "percentage": 0, "sdkVer": "3.7.8" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 89.44, "sdkVer": "3.7.12" },
  { "percentage": 3.43, "sdkVer": "3.6.6" },
  { "percentage": 1.34, "sdkVer": "3.5.8" },
  { "percentage": 1.07, "sdkVer": "3.3.5" },
  { "percentage": 0.9, "sdkVer": "3.4.10" }
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

更新时间：2025 年 3 月 30 日
