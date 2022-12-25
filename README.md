
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.29.0

console.log('The most popular version:', mostPopular);
// 2.29.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 60.44, "sdkVer": "2.29.0" },
  { "percentage": 19.61, "sdkVer": "2.28.1" },
  { "percentage": 0.02, "sdkVer": "2.28.0" },
  { "percentage": 7.93, "sdkVer": "2.27.3" },
  { "percentage": 0.01, "sdkVer": "2.27.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 60.44, "sdkVer": "2.29.0" },
  { "percentage": 19.61, "sdkVer": "2.28.1" },
  { "percentage": 7.93, "sdkVer": "2.27.3" },
  { "percentage": 2.82, "sdkVer": "2.25.4" },
  { "percentage": 1.79, "sdkVer": "2.24.7" }
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

更新时间：2022 年 12 月 25 日
