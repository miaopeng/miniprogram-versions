
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
  { "percentage": 92.9894846916, "sdkVer": "2.10.4" },
  { "percentage": 0.16886816376, "sdkVer": "2.10.3" },
  { "percentage": 0.00156709004418, "sdkVer": "2.10.2" },
  { "percentage": 0.0382427640635, "sdkVer": "2.10.1" },
  { "percentage": 0.000173951114179, "sdkVer": "2.10.0" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 92.9894846916, "sdkVer": "2.10.4" },
  { "percentage": 2.06001936509, "sdkVer": "2.9.5" },
  { "percentage": 1.74017187356, "sdkVer": "2.8.3" },
  { "percentage": 0.985291594141, "sdkVer": "2.6.6" },
  { "percentage": 0.904735515787, "sdkVer": "2.7.7" }
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

更新时间：2020 年 4 月 13 日
