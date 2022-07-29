
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.25.2

console.log('The most popular version:', mostPopular);
// 2.25.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 6.22, "sdkVer": "2.25.2" },
  { "percentage": 74.33, "sdkVer": "2.25.1" },
  { "percentage": 0.18, "sdkVer": "2.25.0" },
  { "percentage": 7.07, "sdkVer": "2.24.7" },
  { "percentage": 0, "sdkVer": "2.24.6" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 74.33, "sdkVer": "2.25.1" },
  { "percentage": 7.07, "sdkVer": "2.24.7" },
  { "percentage": 6.22, "sdkVer": "2.25.2" },
  { "percentage": 3.41, "sdkVer": "2.24.4" },
  { "percentage": 2.96, "sdkVer": "2.23.4" }
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

更新时间：2022 年 7 月 29 日
