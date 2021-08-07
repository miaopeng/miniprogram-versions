
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.19.1

console.log('The most popular version:', mostPopular);
// 2.19.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 3.99, "sdkVer": "2.19.1" },
  { "percentage": 79.11, "sdkVer": "2.19.0" },
  { "percentage": 5.04, "sdkVer": "2.18.1" },
  { "percentage": 0.01, "sdkVer": "2.18.0" },
  { "percentage": 0.08, "sdkVer": "2.17.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 79.11, "sdkVer": "2.19.0" },
  { "percentage": 5.04, "sdkVer": "2.18.1" },
  { "percentage": 3.99, "sdkVer": "2.19.1" },
  { "percentage": 3.48, "sdkVer": "2.16.1" },
  { "percentage": 3.19, "sdkVer": "2.17.0" }
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

更新时间：2021 年 8 月 7 日
