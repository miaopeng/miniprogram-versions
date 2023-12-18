
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.2.4

console.log('The most popular version:', mostPopular);
// 3.2.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 82.6, "sdkVer": "3.2.4" },
  { "percentage": 0.03, "sdkVer": "3.2.3" },
  { "percentage": 1.1, "sdkVer": "3.2.2" },
  { "percentage": 0, "sdkVer": "3.2.1" },
  { "percentage": 0, "sdkVer": "3.2.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.6, "sdkVer": "3.2.4" },
  { "percentage": 5.86, "sdkVer": "3.1.5" },
  { "percentage": 1.95, "sdkVer": "3.0.2" },
  { "percentage": 1.55, "sdkVer": "2.33.0" },
  { "percentage": 1.12, "sdkVer": "2.30.4" }
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

更新时间：2023 年 12 月 18 日
