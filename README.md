
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
  { "percentage": 0.837601815862, "sdkVer": "2.11.0" },
  { "percentage": 92.5112850028, "sdkVer": "2.10.4" },
  { "percentage": 0.206296891931, "sdkVer": "2.10.3" },
  { "percentage": 0.00119382670057, "sdkVer": "2.10.2" },
  { "percentage": 0.0344132448775, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 92.5112850028, "sdkVer": "2.10.4" },
  { "percentage": 1.96080814261, "sdkVer": "2.9.5" },
  { "percentage": 1.64766959986, "sdkVer": "2.8.3" },
  { "percentage": 0.902322898184, "sdkVer": "2.6.6" },
  { "percentage": 0.861177984333, "sdkVer": "2.7.7" }
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

更新时间：2020 年 4 月 17 日
