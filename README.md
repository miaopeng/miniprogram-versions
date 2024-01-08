
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.3.1

console.log('The most popular version:', mostPopular);
// 3.3.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 29.46, "sdkVer": "3.3.1" },
  { "percentage": 37.37, "sdkVer": "3.3.0" },
  { "percentage": 18.66, "sdkVer": "3.2.5" },
  { "percentage": 0.03, "sdkVer": "3.2.4" },
  { "percentage": 0, "sdkVer": "3.2.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 37.37, "sdkVer": "3.3.0" },
  { "percentage": 29.46, "sdkVer": "3.3.1" },
  { "percentage": 18.66, "sdkVer": "3.2.5" },
  { "percentage": 5.02, "sdkVer": "3.1.5" },
  { "percentage": 1.57, "sdkVer": "3.0.2" }
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

更新时间：2024 年 1 月 8 日
