
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
  { "percentage": 0.0384160973284, "sdkVer": "2.11.0" },
  { "percentage": 93.0979867073, "sdkVer": "2.10.4" },
  { "percentage": 0.588035613078, "sdkVer": "2.10.3" },
  { "percentage": 0.000889871545074, "sdkVer": "2.10.2" },
  { "percentage": 0.0702889823847, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 93.0979867073, "sdkVer": "2.10.4" },
  { "percentage": 1.85420813554, "sdkVer": "2.9.5" },
  { "percentage": 1.5730168241, "sdkVer": "2.8.3" },
  { "percentage": 0.868061207217, "sdkVer": "2.6.6" },
  { "percentage": 0.828521651222, "sdkVer": "2.7.7" }
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

更新时间：2020 年 4 月 22 日
