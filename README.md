
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.0

console.log('The most popular version:', mostPopular);
// 2.11.0

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 80.081935744, "sdkVer": "2.11.0" },
  { "percentage": 14.1193410817, "sdkVer": "2.10.4" },
  { "percentage": 0.166533002973, "sdkVer": "2.10.3" },
  { "percentage": 0.000445666423852, "sdkVer": "2.10.2" },
  { "percentage": 0.0178738346168, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 80.081935744, "sdkVer": "2.11.0" },
  { "percentage": 14.1193410817, "sdkVer": "2.10.4" },
  { "percentage": 1.67065146837, "sdkVer": "2.9.5" },
  { "percentage": 1.43540593666, "sdkVer": "2.8.3" },
  { "percentage": 0.806571509089, "sdkVer": "2.6.6" }
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

更新时间：2020 年 5 月 10 日
