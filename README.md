
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.12.2

console.log('The most popular version:', mostPopular);
// 2.12.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 88.59, "sdkVer": "2.12.2" },
  { "percentage": 0.3, "sdkVer": "2.12.1" },
  { "percentage": 0.01, "sdkVer": "2.12.0" },
  { "percentage": 0.15, "sdkVer": "2.11.3" },
  { "percentage": 3.27, "sdkVer": "2.11.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 88.59, "sdkVer": "2.12.2" },
  { "percentage": 4.8, "sdkVer": "2.10.4" },
  { "percentage": 3.27, "sdkVer": "2.11.2" },
  { "percentage": 0.78, "sdkVer": "2.9.5" },
  { "percentage": 0.71, "sdkVer": "2.8.3" }
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

更新时间：2020 年 8 月 31 日
