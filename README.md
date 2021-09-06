
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.19.3

console.log('The most popular version:', mostPopular);
// 2.19.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 82.63, "sdkVer": "2.19.3" },
  { "percentage": 5.18, "sdkVer": "2.19.2" },
  { "percentage": 0.12, "sdkVer": "2.19.1" },
  { "percentage": 0, "sdkVer": "2.19.0" },
  { "percentage": 2.52, "sdkVer": "2.18.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.63, "sdkVer": "2.19.3" },
  { "percentage": 5.18, "sdkVer": "2.19.2" },
  { "percentage": 2.94, "sdkVer": "2.16.1" },
  { "percentage": 2.52, "sdkVer": "2.18.1" },
  { "percentage": 2.33, "sdkVer": "2.17.0" }
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

更新时间：2021 年 9 月 6 日
