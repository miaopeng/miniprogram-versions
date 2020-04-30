
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
  { "percentage": 77.9589474055, "sdkVer": "2.11.0" },
  { "percentage": 15.5292375216, "sdkVer": "2.10.4" },
  { "percentage": 0.750630764271, "sdkVer": "2.10.3" },
  { "percentage": 0.000631071466998, "sdkVer": "2.10.2" },
  { "percentage": 0.0243546881412, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 77.9589474055, "sdkVer": "2.11.0" },
  { "percentage": 15.5292375216, "sdkVer": "2.10.4" },
  { "percentage": 1.73353252506, "sdkVer": "2.9.5" },
  { "percentage": 1.46247348534, "sdkVer": "2.8.3" },
  { "percentage": 0.806870407784, "sdkVer": "2.6.6" }
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

更新时间：2020 年 4 月 30 日
