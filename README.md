
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.3

console.log('The most popular version:', mostPopular);
// 2.11.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 78.67, "sdkVer": "2.11.3" },
  { "percentage": 10.52, "sdkVer": "2.11.2" },
  { "percentage": 0.01, "sdkVer": "2.11.1" },
  { "percentage": 0.06, "sdkVer": "2.11.0" },
  { "percentage": 6.82, "sdkVer": "2.10.4" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 78.67, "sdkVer": "2.11.3" },
  { "percentage": 10.52, "sdkVer": "2.11.2" },
  { "percentage": 6.82, "sdkVer": "2.10.4" },
  { "percentage": 1.11, "sdkVer": "2.9.5" },
  { "percentage": 0.98, "sdkVer": "2.8.3" }
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

更新时间：2020 年 6 月 30 日
