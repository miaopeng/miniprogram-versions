# Wechat Miniprogram Base Library Versions

## Useage

```
const { latest, mostPopular, versions, android, iOS } = require('miniprogram-versions');

console.log('The latest version of miniprogram sdk is:', latest);
// 2.10.3

console.log('The most popular version of miniprogram sdk is:', mostPopular);
// 2.10.2

console.log('all versions:', versions);
/*
  [
    { percentage: 12.7901006201, sdkVer: '2.10.3' },
    { percentage: 77.8855561356, sdkVer: '2.10.2' },
    { percentage: 0.683329196418, sdkVer: '2.10.1' },
    { percentage: 0.000528376120724, sdkVer: '2.10.0' },
    { percentage: 2.58261518692, sdkVer: '2.9.5' },
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

更新时间：2020 年 3 月 27 日
