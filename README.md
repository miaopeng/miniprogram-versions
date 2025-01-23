
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.7.7

console.log('The most popular version:', mostPopular);
// 3.7.6

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 13.97, "sdkVer": "3.7.7" },
  { "percentage": 53.53, "sdkVer": "3.7.6" },
  { "percentage": 0.22, "sdkVer": "3.7.5" },
  { "percentage": 11.1, "sdkVer": "3.7.4" },
  { "percentage": 0.01, "sdkVer": "3.7.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 53.53, "sdkVer": "3.7.6" },
  { "percentage": 14.2, "sdkVer": "3.6.6" },
  { "percentage": 13.97, "sdkVer": "3.7.7" },
  { "percentage": 11.1, "sdkVer": "3.7.4" },
  { "percentage": 1.79, "sdkVer": "3.5.8" }
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

更新时间：2025 年 1 月 23 日
