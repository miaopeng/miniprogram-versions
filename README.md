
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.2

console.log('The most popular version:', mostPopular);
// 2.11.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 40.44, "sdkVer": "2.11.2" },
  { "percentage": 48.64, "sdkVer": "2.11.1" },
  { "percentage": 0.1, "sdkVer": "2.11.0" },
  { "percentage": 7.06, "sdkVer": "2.10.4" },
  { "percentage": 0.11, "sdkVer": "2.10.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 48.64, "sdkVer": "2.11.1" },
  { "percentage": 40.44, "sdkVer": "2.11.2" },
  { "percentage": 7.06, "sdkVer": "2.10.4" },
  { "percentage": 1.07, "sdkVer": "2.9.5" },
  { "percentage": 0.92, "sdkVer": "2.8.3" }
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

更新时间：2020 年 6 月 18 日
