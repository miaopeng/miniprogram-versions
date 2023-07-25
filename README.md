
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.0.0

console.log('The most popular version:', mostPopular);
// 2.33.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.74, "sdkVer": "3.0.0" },
  { "percentage": 83.73, "sdkVer": "2.33.0" },
  { "percentage": 2.97, "sdkVer": "2.32.3" },
  { "percentage": 0.02, "sdkVer": "2.32.2" },
  { "percentage": 0.1, "sdkVer": "2.32.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 83.73, "sdkVer": "2.33.0" },
  { "percentage": 3.17, "sdkVer": "2.30.4" },
  { "percentage": 2.97, "sdkVer": "2.32.3" },
  { "percentage": 1.52, "sdkVer": "2.27.3" },
  { "percentage": 1.46, "sdkVer": "2.31.1" }
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

更新时间：2023 年 7 月 25 日
