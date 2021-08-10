
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.19.1

console.log('The most popular version:', mostPopular);
// 2.19.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 50.69, "sdkVer": "2.19.1" },
  { "percentage": 33.84, "sdkVer": "2.19.0" },
  { "percentage": 4.53, "sdkVer": "2.18.1" },
  { "percentage": 0.01, "sdkVer": "2.18.0" },
  { "percentage": 0.1, "sdkVer": "2.17.3" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 50.69, "sdkVer": "2.19.1" },
  { "percentage": 33.84, "sdkVer": "2.19.0" },
  { "percentage": 4.53, "sdkVer": "2.18.1" },
  { "percentage": 3.21, "sdkVer": "2.16.1" },
  { "percentage": 2.91, "sdkVer": "2.17.0" }
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

更新时间：2021 年 8 月 10 日
