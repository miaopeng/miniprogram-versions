
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.17.3

console.log('The most popular version:', mostPopular);
// 2.17.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 72.77, "sdkVer": "2.17.3" },
  { "percentage": 0, "sdkVer": "2.17.1" },
  { "percentage": 14.43, "sdkVer": "2.17.0" },
  { "percentage": 5.74, "sdkVer": "2.16.1" },
  { "percentage": 0.05, "sdkVer": "2.16.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 72.77, "sdkVer": "2.17.3" },
  { "percentage": 14.43, "sdkVer": "2.17.0" },
  { "percentage": 5.74, "sdkVer": "2.16.1" },
  { "percentage": 2.1, "sdkVer": "2.14.1" },
  { "percentage": 1.75, "sdkVer": "2.15.0" }
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

更新时间：2021 年 6 月 24 日
