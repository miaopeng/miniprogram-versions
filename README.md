
# Wechat Miniprogram Base Library Versions

## Useage

Get latest or most popular version:

```;
const { latest, mostPopular } = require('miniprogram-versions');

console.log('The latest version:', latest);
// 2.10.4

console.log('The most popular version:', mostPopular);
// 2.10.4

```

Get all versions sorted by version or persentage.

```
const { versions, sortedByPercent } = require('miniprogram-versions');

console.log('all versions:', versions);
/*
[
  { "percentage": 92.79786715, "sdkVer": "2.10.4" },
  { "percentage": 0.207459391172, "sdkVer": "2.10.3" },
  { "percentage": 0.0021144785381, "sdkVer": "2.10.2" },
  { "percentage": 0.0759869926711, "sdkVer": "2.10.1" },
  { "percentage": 0.000213196288984, "sdkVer": "2.10.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 92.79786715, "sdkVer": "2.10.4" },
  { "percentage": 2.10873160088, "sdkVer": "2.9.5" },
  { "percentage": 1.75892849251, "sdkVer": "2.8.3" },
  { "percentage": 1.01053551988, "sdkVer": "2.6.6" },
  { "percentage": 0.911278998288, "sdkVer": "2.7.7" }
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

更新时间：2020 年 4 月 8 日
