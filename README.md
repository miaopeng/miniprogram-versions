
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.4.4

console.log('The most popular version:', mostPopular);
// 3.4.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.27, "sdkVer": "3.4.4" },
  { "percentage": 82.42, "sdkVer": "3.4.3" },
  { "percentage": 4.62, "sdkVer": "3.4.2" },
  { "percentage": 0, "sdkVer": "3.4.1" },
  { "percentage": 0.04, "sdkVer": "3.4.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.42, "sdkVer": "3.4.3" },
  { "percentage": 4.62, "sdkVer": "3.4.2" },
  { "percentage": 4.61, "sdkVer": "3.3.5" },
  { "percentage": 1.42, "sdkVer": "3.1.5" },
  { "percentage": 1.29, "sdkVer": "3.2.5" }
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

更新时间：2024 年 5 月 21 日
