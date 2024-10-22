
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.6.3

console.log('The most popular version:', mostPopular);
// 3.6.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.18, "sdkVer": "3.6.3" },
  { "percentage": 80.75, "sdkVer": "3.6.2" },
  { "percentage": 0.08, "sdkVer": "3.6.1" },
  { "percentage": 0.03, "sdkVer": "3.6.0" },
  { "percentage": 9.62, "sdkVer": "3.5.8" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 80.75, "sdkVer": "3.6.2" },
  { "percentage": 9.62, "sdkVer": "3.5.8" },
  { "percentage": 2.39, "sdkVer": "3.4.10" },
  { "percentage": 2.24, "sdkVer": "3.3.5" },
  { "percentage": 0.99, "sdkVer": "2.27.3" }
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

更新时间：2024 年 10 月 22 日
