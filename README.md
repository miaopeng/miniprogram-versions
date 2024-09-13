
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.5.7

console.log('The most popular version:', mostPopular);
// 3.5.6

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 4.21, "sdkVer": "3.5.7" },
  { "percentage": 83.57, "sdkVer": "3.5.6" },
  { "percentage": 0.19, "sdkVer": "3.5.5" },
  { "percentage": 0.01, "sdkVer": "3.5.4" },
  { "percentage": 0.11, "sdkVer": "3.5.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 83.57, "sdkVer": "3.5.6" },
  { "percentage": 4.21, "sdkVer": "3.5.7" },
  { "percentage": 3.82, "sdkVer": "3.4.10" },
  { "percentage": 2.89, "sdkVer": "3.3.5" },
  { "percentage": 0.97, "sdkVer": "3.1.5" }
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

更新时间：2024 年 9 月 13 日
