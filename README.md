
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.11.1

console.log('The most popular version:', mostPopular);
// 2.11.1

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 82.830752987, "sdkVer": "2.11.1" },
  { "percentage": 0.623197351121, "sdkVer": "2.11.0" },
  { "percentage": 11.4455279795, "sdkVer": "2.10.4" },
  { "percentage": 0.194265178154, "sdkVer": "2.10.3" },
  { "percentage": 0.000238672291788, "sdkVer": "2.10.2" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 82.830752987, "sdkVer": "2.11.1" },
  { "percentage": 11.4455279795, "sdkVer": "2.10.4" },
  { "percentage": 1.46545851076, "sdkVer": "2.9.5" },
  { "percentage": 1.23783358979, "sdkVer": "2.8.3" },
  { "percentage": 0.710644325429, "sdkVer": "2.6.6" }
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

更新时间：2020 年 5 月 28 日
