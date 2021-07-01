
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.18.0

console.log('The most popular version:', mostPopular);
// 2.18.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 74.54, "sdkVer": "2.18.0" },
  { "percentage": 0.05, "sdkVer": "2.17.3" },
  { "percentage": 0, "sdkVer": "2.17.1" },
  { "percentage": 13.22, "sdkVer": "2.17.0" },
  { "percentage": 5.41, "sdkVer": "2.16.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 74.54, "sdkVer": "2.18.0" },
  { "percentage": 13.22, "sdkVer": "2.17.0" },
  { "percentage": 5.41, "sdkVer": "2.16.1" },
  { "percentage": 1.99, "sdkVer": "2.14.1" },
  { "percentage": 1.7, "sdkVer": "2.15.0" }
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

更新时间：2021 年 7 月 1 日
