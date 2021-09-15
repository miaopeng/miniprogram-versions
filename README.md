
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.19.5

console.log('The most popular version:', mostPopular);
// 2.19.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 2.66, "sdkVer": "2.19.5" },
  { "percentage": 82.38, "sdkVer": "2.19.4" },
  { "percentage": 0.03, "sdkVer": "2.19.3" },
  { "percentage": 3.99, "sdkVer": "2.19.2" },
  { "percentage": 0.12, "sdkVer": "2.19.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.38, "sdkVer": "2.19.4" },
  { "percentage": 3.99, "sdkVer": "2.19.2" },
  { "percentage": 2.66, "sdkVer": "2.19.5" },
  { "percentage": 2.64, "sdkVer": "2.16.1" },
  { "percentage": 2.17, "sdkVer": "2.18.1" }
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

更新时间：2021 年 9 月 15 日
