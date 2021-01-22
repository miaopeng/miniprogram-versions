
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.14.4

console.log('The most popular version:', mostPopular);
// 2.14.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 78.1, "sdkVer": "2.14.4" },
  { "percentage": 0.25, "sdkVer": "2.14.3" },
  { "percentage": 11.62, "sdkVer": "2.14.1" },
  { "percentage": 0, "sdkVer": "2.14.0" },
  { "percentage": 1.61, "sdkVer": "2.13.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 78.1, "sdkVer": "2.14.4" },
  { "percentage": 11.62, "sdkVer": "2.14.1" },
  { "percentage": 3.93, "sdkVer": "2.12.2" },
  { "percentage": 1.75, "sdkVer": "2.10.4" },
  { "percentage": 1.61, "sdkVer": "2.13.2" }
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

更新时间：2021 年 1 月 22 日
