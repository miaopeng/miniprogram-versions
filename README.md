
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.0

console.log('The most popular version:', mostPopular);
// 2.10.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 0.534025478409, "sdkVer": "2.11.0" },
  { "percentage": 92.636795379, "sdkVer": "2.10.4" },
  { "percentage": 0.21183468101, "sdkVer": "2.10.3" },
  { "percentage": 0.00130832457824, "sdkVer": "2.10.2" },
  { "percentage": 0.0374989830703, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 92.636795379, "sdkVer": "2.10.4" },
  { "percentage": 2.0128494712, "sdkVer": "2.9.5" },
  { "percentage": 1.6902372527, "sdkVer": "2.8.3" },
  { "percentage": 0.925057587404, "sdkVer": "2.6.6" },
  { "percentage": 0.880297692502, "sdkVer": "2.7.7" }
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

更新时间：2020 年 4 月 15 日
