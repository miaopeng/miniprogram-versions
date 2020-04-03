# Wechat Miniprogram Base Library Versions

## Useage

```
const { latest, mostPopular, versions, android, iOS } = require('miniprogram-versions');

console.log('The latest version of miniprogram sdk is:', latest);
// 2.10.4

console.log('The most popular version of miniprogram sdk is:', mostPopular);
// 2.10.3

console.log('all versions:', versions);
/*
[
  { percentage: 30.683777017, sdkVer: '2.10.4' },
  { percentage: 62.4125745814, sdkVer: '2.10.3' },
  { percentage: 0.00342223308415, sdkVer: '2.10.2' },
  { percentage: 0.705478818889, sdkVer: '2.10.1' },
  { percentage: 0.000233319938702, sdkVer: '2.10.0' },
  { percentage: 1.81532428138, sdkVer: '2.9.5' },
  { percentage: 0.000389518130719, sdkVer: '2.9.4' },
  { percentage: 0.342777732031, sdkVer: '2.9.3' },
  ...
]
*/

 console.log('android versions', android);
 console.log('android latest version', android.latest);
 console.log('iOS versions', iOS);
 console.log('iOS latest version', iOS.latest);
```

## Manual Update

```
yarn update
```

## 更新时间

更新时间：2020 年 4 月 3 日
