
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
  { "percentage": 77.5283479263, "sdkVer": "2.11.0" },
  { "percentage": 15.6177323285, "sdkVer": "2.10.4" },
  { "percentage": 1.05098708475, "sdkVer": "2.10.3" },
  { "percentage": 0.000702396088665, "sdkVer": "2.10.2" },
  { "percentage": 0.0241514419303, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 77.5283479263, "sdkVer": "2.11.0" },
  { "percentage": 15.6177323285, "sdkVer": "2.10.4" },
  { "percentage": 1.74162355815, "sdkVer": "2.9.5" },
  { "percentage": 1.47357460263, "sdkVer": "2.8.3" },
  { "percentage": 1.05098708475, "sdkVer": "2.10.3" }
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

更新时间：2020 年 5 月 1 日
