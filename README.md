
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.26.1

console.log('The most popular version:', mostPopular);
// 2.26.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 79.43, "sdkVer": "2.26.1" },
  { "percentage": 0.73, "sdkVer": "2.26.0" },
  { "percentage": 7.08, "sdkVer": "2.25.4" },
  { "percentage": 0.2, "sdkVer": "2.25.3" },
  { "percentage": 0.16, "sdkVer": "2.25.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 79.43, "sdkVer": "2.26.1" },
  { "percentage": 7.08, "sdkVer": "2.25.4" },
  { "percentage": 3.27, "sdkVer": "2.24.7" },
  { "percentage": 2.24, "sdkVer": "2.23.4" },
  { "percentage": 2.15, "sdkVer": "2.24.4" }
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

更新时间：2022 年 9 月 25 日
