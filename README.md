
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.0.1

console.log('The most popular version:', mostPopular);
// 3.0.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 82.04, "sdkVer": "3.0.1" },
  { "percentage": 0.02, "sdkVer": "3.0.0" },
  { "percentage": 5.77, "sdkVer": "2.33.0" },
  { "percentage": 1.87, "sdkVer": "2.32.3" },
  { "percentage": 0.1, "sdkVer": "2.32.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.04, "sdkVer": "3.0.1" },
  { "percentage": 5.77, "sdkVer": "2.33.0" },
  { "percentage": 2.36, "sdkVer": "2.30.4" },
  { "percentage": 1.87, "sdkVer": "2.32.3" },
  { "percentage": 1.47, "sdkVer": "2.27.3" }
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

更新时间：2023 年 9 月 4 日
