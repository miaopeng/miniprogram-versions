
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.19.2

console.log('The most popular version:', mostPopular);
// 2.19.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.78, "sdkVer": "2.19.2" },
  { "percentage": 83.47, "sdkVer": "2.19.1" },
  { "percentage": 0.05, "sdkVer": "2.19.0" },
  { "percentage": 4.46, "sdkVer": "2.18.1" },
  { "percentage": 0.01, "sdkVer": "2.18.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 83.47, "sdkVer": "2.19.1" },
  { "percentage": 4.46, "sdkVer": "2.18.1" },
  { "percentage": 3.32, "sdkVer": "2.16.1" },
  { "percentage": 2.95, "sdkVer": "2.17.0" },
  { "percentage": 1.56, "sdkVer": "2.14.1" }
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

更新时间：2021 年 8 月 15 日
