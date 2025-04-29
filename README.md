
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.8.3

console.log('The most popular version:', mostPopular);
// 3.8.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.01, "sdkVer": "3.8.3" },
  { "percentage": 22.32, "sdkVer": "3.8.2" },
  { "percentage": 28.85, "sdkVer": "3.8.1" },
  { "percentage": 0.08, "sdkVer": "3.8.0" },
  { "percentage": 22.86, "sdkVer": "3.7.12" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 28.85, "sdkVer": "3.8.1" },
  { "percentage": 22.86, "sdkVer": "3.7.12" },
  { "percentage": 22.32, "sdkVer": "3.8.2" },
  { "percentage": 8.34, "sdkVer": "3.6.6" },
  { "percentage": 3.57, "sdkVer": "3.5.8" }
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

更新时间：2025 年 4 月 29 日
