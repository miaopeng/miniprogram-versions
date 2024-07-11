
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.4.10

console.log('The most popular version:', mostPopular);
// 3.4.9

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 14.85, "sdkVer": "3.4.10" },
  { "percentage": 75.19, "sdkVer": "3.4.9" },
  { "percentage": 0.02, "sdkVer": "3.4.8" },
  { "percentage": 0.01, "sdkVer": "3.4.7" },
  { "percentage": 0.05, "sdkVer": "3.4.6" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 75.19, "sdkVer": "3.4.9" },
  { "percentage": 14.85, "sdkVer": "3.4.10" },
  { "percentage": 4.18, "sdkVer": "3.3.5" },
  { "percentage": 1.08, "sdkVer": "3.1.5" },
  { "percentage": 0.82, "sdkVer": "2.27.3" }
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

更新时间：2024 年 7 月 11 日
