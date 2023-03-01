
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.30.2

console.log('The most popular version:', mostPopular);
// 2.30.2

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 81.26, "sdkVer": "2.30.2" },
  { "percentage": 3, "sdkVer": "2.30.1" },
  { "percentage": 0.05, "sdkVer": "2.30.0" },
  { "percentage": 3.75, "sdkVer": "2.29.2" },
  { "percentage": 0, "sdkVer": "2.29.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 81.26, "sdkVer": "2.30.2" },
  { "percentage": 3.75, "sdkVer": "2.29.2" },
  { "percentage": 3, "sdkVer": "2.30.1" },
  { "percentage": 2.49, "sdkVer": "2.27.3" },
  { "percentage": 1.83, "sdkVer": "2.28.1" }
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

更新时间：2023 年 3 月 1 日
