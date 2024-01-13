
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 3.3.1

console.log('The most popular version:', mostPopular);
// 3.3.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 66.84, "sdkVer": "3.3.1" },
  { "percentage": 9.23, "sdkVer": "3.3.0" },
  { "percentage": 10.38, "sdkVer": "3.2.5" },
  { "percentage": 0.04, "sdkVer": "3.2.4" },
  { "percentage": 0, "sdkVer": "3.2.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 66.84, "sdkVer": "3.3.1" },
  { "percentage": 10.38, "sdkVer": "3.2.5" },
  { "percentage": 9.23, "sdkVer": "3.3.0" },
  { "percentage": 4.32, "sdkVer": "3.1.5" },
  { "percentage": 1.46, "sdkVer": "3.0.2" }
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

更新时间：2024 年 1 月 13 日
