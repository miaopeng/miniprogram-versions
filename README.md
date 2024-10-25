
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.6.3

console.log('The most popular version:', mostPopular);
// 3.6.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 43.1, "sdkVer": "3.6.3" },
  { "percentage": 43.4, "sdkVer": "3.6.2" },
  { "percentage": 0.01, "sdkVer": "3.6.1" },
  { "percentage": 0.01, "sdkVer": "3.6.0" },
  { "percentage": 6.54, "sdkVer": "3.5.8" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 43.4, "sdkVer": "3.6.2" },
  { "percentage": 43.1, "sdkVer": "3.6.3" },
  { "percentage": 6.54, "sdkVer": "3.5.8" },
  { "percentage": 1.77, "sdkVer": "3.4.10" },
  { "percentage": 1.67, "sdkVer": "3.3.5" }
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

更新时间：2024 年 10 月 25 日
