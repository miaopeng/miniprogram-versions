
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
  { "percentage": 0.917564426222, "sdkVer": "2.11.0" },
  { "percentage": 91.9237074836, "sdkVer": "2.10.4" },
  { "percentage": 0.996361199152, "sdkVer": "2.10.3" },
  { "percentage": 0.000829206695087, "sdkVer": "2.10.2" },
  { "percentage": 0.0913426135208, "sdkVer": "2.10.1" }
  ...
]
*/

console.log('sorted versions by persentage:', sortedByPercent);
/*
[
  { "percentage": 91.9237074836, "sdkVer": "2.10.4" },
  { "percentage": 1.80421876616, "sdkVer": "2.9.5" },
  { "percentage": 1.5297887538, "sdkVer": "2.8.3" },
  { "percentage": 0.996361199152, "sdkVer": "2.10.3" },
  { "percentage": 0.917564426222, "sdkVer": "2.11.0" }
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

更新时间：2020 年 4 月 23 日
