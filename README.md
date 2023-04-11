
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.30.4

console.log('The most popular version:', mostPopular);
// 2.30.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 87.86, "sdkVer": "2.30.4" },
  { "percentage": 0.06, "sdkVer": "2.30.3" },
  { "percentage": 0.16, "sdkVer": "2.30.2" },
  { "percentage": 0, "sdkVer": "2.30.1" },
  { "percentage": 0.02, "sdkVer": "2.30.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 87.86, "sdkVer": "2.30.4" },
  { "percentage": 2.07, "sdkVer": "2.27.3" },
  { "percentage": 1.65, "sdkVer": "2.29.2" },
  { "percentage": 1.55, "sdkVer": "2.25.4" },
  { "percentage": 1.22, "sdkVer": "2.28.1" }
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

更新时间：2023 年 4 月 11 日
