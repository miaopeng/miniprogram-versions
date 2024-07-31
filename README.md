
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.5.2

console.log('The most popular version:', mostPopular);
// 3.5.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.44, "sdkVer": "3.5.2" },
  { "percentage": 80.7, "sdkVer": "3.5.1" },
  { "percentage": 0.03, "sdkVer": "3.5.0" },
  { "percentage": 8.97, "sdkVer": "3.4.10" },
  { "percentage": 0, "sdkVer": "3.4.9" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 80.7, "sdkVer": "3.5.1" },
  { "percentage": 8.97, "sdkVer": "3.4.10" },
  { "percentage": 3.83, "sdkVer": "3.3.5" },
  { "percentage": 1.12, "sdkVer": "3.1.5" },
  { "percentage": 0.9, "sdkVer": "2.27.3" }
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

更新时间：2024 年 7 月 31 日
