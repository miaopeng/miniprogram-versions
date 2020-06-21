
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.3

console.log('The most popular version:', mostPopular);
// 2.11.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.04, "sdkVer": "2.11.3" },
  { "percentage": 87.06, "sdkVer": "2.11.2" },
  { "percentage": 0.29, "sdkVer": "2.11.1" },
  { "percentage": 0.04, "sdkVer": "2.11.0" },
  { "percentage": 7.89, "sdkVer": "2.10.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 87.06, "sdkVer": "2.11.2" },
  { "percentage": 7.89, "sdkVer": "2.10.4" },
  { "percentage": 1.23, "sdkVer": "2.9.5" },
  { "percentage": 1.08, "sdkVer": "2.8.3" },
  { "percentage": 0.63, "sdkVer": "2.6.6" }
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

更新时间：2020 年 6 月 21 日
