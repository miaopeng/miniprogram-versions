
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.6.3

console.log('The most popular version:', mostPopular);
// 3.6.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 82.75, "sdkVer": "3.6.3" },
  { "percentage": 0.43, "sdkVer": "3.6.2" },
  { "percentage": 0.01, "sdkVer": "3.6.1" },
  { "percentage": 0.02, "sdkVer": "3.6.0" },
  { "percentage": 8.09, "sdkVer": "3.5.8" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.75, "sdkVer": "3.6.3" },
  { "percentage": 8.09, "sdkVer": "3.5.8" },
  { "percentage": 2.23, "sdkVer": "3.4.10" },
  { "percentage": 2.12, "sdkVer": "3.3.5" },
  { "percentage": 0.81, "sdkVer": "3.1.5" }
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

更新时间：2024 年 10 月 27 日
