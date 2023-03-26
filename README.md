
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.30.3

console.log('The most popular version:', mostPopular);
// 2.30.3

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 85.49, "sdkVer": "2.30.3" },
  { "percentage": 1.81, "sdkVer": "2.30.2" },
  { "percentage": 0, "sdkVer": "2.30.1" },
  { "percentage": 0.11, "sdkVer": "2.30.0" },
  { "percentage": 1.91, "sdkVer": "2.29.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 85.49, "sdkVer": "2.30.3" },
  { "percentage": 2.2, "sdkVer": "2.27.3" },
  { "percentage": 1.91, "sdkVer": "2.29.2" },
  { "percentage": 1.81, "sdkVer": "2.30.2" },
  { "percentage": 1.63, "sdkVer": "2.25.4" }
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

更新时间：2023 年 3 月 26 日
