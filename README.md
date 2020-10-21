
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.13.2

console.log('The most popular version:', mostPopular);
// 2.13.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.22, "sdkVer": "2.13.2" },
  { "percentage": 78.13, "sdkVer": "2.13.1" },
  { "percentage": 0, "sdkVer": "2.13.0" },
  { "percentage": 13.82, "sdkVer": "2.12.2" },
  { "percentage": 0, "sdkVer": "2.12.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 78.13, "sdkVer": "2.13.1" },
  { "percentage": 13.82, "sdkVer": "2.12.2" },
  { "percentage": 3.46, "sdkVer": "2.10.4" },
  { "percentage": 2.16, "sdkVer": "2.11.2" },
  { "percentage": 0.57, "sdkVer": "2.9.5" }
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

更新时间：2020 年 10 月 21 日
