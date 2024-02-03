
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.3.4

console.log('The most popular version:', mostPopular);
// 3.3.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 10.26, "sdkVer": "3.3.4" },
  { "percentage": 72.82, "sdkVer": "3.3.3" },
  { "percentage": 0.05, "sdkVer": "3.3.2" },
  { "percentage": 0, "sdkVer": "3.3.1" },
  { "percentage": 2.16, "sdkVer": "3.3.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 72.82, "sdkVer": "3.3.3" },
  { "percentage": 10.26, "sdkVer": "3.3.4" },
  { "percentage": 4.06, "sdkVer": "3.2.5" },
  { "percentage": 2.89, "sdkVer": "3.1.5" },
  { "percentage": 2.16, "sdkVer": "3.3.0" }
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

更新时间：2024 年 2 月 3 日
