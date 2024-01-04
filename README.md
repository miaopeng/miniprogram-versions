
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
  { "percentage": 0.05, "sdkVer": "3.3.1" },
  { "percentage": 46.26, "sdkVer": "3.3.0" },
  { "percentage": 40.55, "sdkVer": "3.2.5" },
  { "percentage": 0.04, "sdkVer": "3.2.4" },
  { "percentage": 0, "sdkVer": "3.2.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 46.26, "sdkVer": "3.3.0" },
  { "percentage": 40.55, "sdkVer": "3.2.5" },
  { "percentage": 4.44, "sdkVer": "3.1.5" },
  { "percentage": 1.39, "sdkVer": "3.0.2" },
  { "percentage": 1.21, "sdkVer": "2.33.0" }
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

更新时间：2024 年 1 月 4 日
