
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.4.1

console.log('The most popular version:', mostPopular);
// 3.4.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 74.96, "sdkVer": "3.4.1" },
  { "percentage": 7.94, "sdkVer": "3.4.0" },
  { "percentage": 8.29, "sdkVer": "3.3.5" },
  { "percentage": 0.27, "sdkVer": "3.3.4" },
  { "percentage": 0, "sdkVer": "3.3.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 74.96, "sdkVer": "3.4.1" },
  { "percentage": 8.29, "sdkVer": "3.3.5" },
  { "percentage": 7.94, "sdkVer": "3.4.0" },
  { "percentage": 1.54, "sdkVer": "3.2.5" },
  { "percentage": 1.54, "sdkVer": "3.1.5" }
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

更新时间：2024 年 4 月 13 日
