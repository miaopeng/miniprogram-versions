
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.5.6

console.log('The most popular version:', mostPopular);
// 3.5.5

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 5.12, "sdkVer": "3.5.6" },
  { "percentage": 82.6, "sdkVer": "3.5.5" },
  { "percentage": 0.03, "sdkVer": "3.5.4" },
  { "percentage": 0.02, "sdkVer": "3.5.3" },
  { "percentage": 0, "sdkVer": "3.5.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.6, "sdkVer": "3.5.5" },
  { "percentage": 5.12, "sdkVer": "3.5.6" },
  { "percentage": 4.06, "sdkVer": "3.4.10" },
  { "percentage": 2.97, "sdkVer": "3.3.5" },
  { "percentage": 0.99, "sdkVer": "3.1.5" }
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

更新时间：2024 年 9 月 8 日
