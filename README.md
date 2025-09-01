
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.9.3

console.log('The most popular version:', mostPopular);
// 3.9.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.78, "sdkVer": "3.9.3" },
  { "percentage": 86.22, "sdkVer": "3.9.2" },
  { "percentage": 0.04, "sdkVer": "3.9.1" },
  { "percentage": 0.01, "sdkVer": "3.9.0" },
  { "percentage": 6, "sdkVer": "3.8.12" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 86.22, "sdkVer": "3.9.2" },
  { "percentage": 6, "sdkVer": "3.8.12" },
  { "percentage": 1.72, "sdkVer": "3.7.12" },
  { "percentage": 1.02, "sdkVer": "3.6.6" },
  { "percentage": 0.78, "sdkVer": "3.9.3" }
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

更新时间：2025 年 9 月 1 日
