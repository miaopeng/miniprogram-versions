
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.0.1

console.log('The most popular version:', mostPopular);
// 3.0.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 55.03, "sdkVer": "3.0.1" },
  { "percentage": 29.55, "sdkVer": "3.0.0" },
  { "percentage": 5.43, "sdkVer": "2.33.0" },
  { "percentage": 1.6, "sdkVer": "2.32.3" },
  { "percentage": 0.08, "sdkVer": "2.32.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 55.03, "sdkVer": "3.0.1" },
  { "percentage": 29.55, "sdkVer": "3.0.0" },
  { "percentage": 5.43, "sdkVer": "2.33.0" },
  { "percentage": 1.94, "sdkVer": "2.30.4" },
  { "percentage": 1.6, "sdkVer": "2.32.3" }
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

更新时间：2023 年 8 月 26 日
