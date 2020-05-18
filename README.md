
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
  { "percentage": 81.4765283645, "sdkVer": "2.11.0" },
  { "percentage": 12.9864766568, "sdkVer": "2.10.4" },
  { "percentage": 0.163615928181, "sdkVer": "2.10.3" },
  { "percentage": 0.00038469340185, "sdkVer": "2.10.2" },
  { "percentage": 0.0136647414203, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 81.4765283645, "sdkVer": "2.11.0" },
  { "percentage": 12.9864766568, "sdkVer": "2.10.4" },
  { "percentage": 1.59210589685, "sdkVer": "2.9.5" },
  { "percentage": 1.36922784929, "sdkVer": "2.8.3" },
  { "percentage": 0.776491710053, "sdkVer": "2.6.6" }
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

更新时间：2020 年 5 月 18 日
