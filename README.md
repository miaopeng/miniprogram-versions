
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.12.1

console.log('The most popular version:', mostPopular);
// 2.12.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 87.58, "sdkVer": "2.12.1" },
  { "percentage": 0.06, "sdkVer": "2.12.0" },
  { "percentage": 0.17, "sdkVer": "2.11.3" },
  { "percentage": 3.69, "sdkVer": "2.11.2" },
  { "percentage": 0, "sdkVer": "2.11.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 87.58, "sdkVer": "2.12.1" },
  { "percentage": 5.23, "sdkVer": "2.10.4" },
  { "percentage": 3.69, "sdkVer": "2.11.2" },
  { "percentage": 0.86, "sdkVer": "2.9.5" },
  { "percentage": 0.79, "sdkVer": "2.8.3" }
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

更新时间：2020 年 8 月 17 日
