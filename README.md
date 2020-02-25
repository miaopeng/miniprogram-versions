# Wechat Miniprogram Base Library Versions

## Useage

```
const { latest, versions, android, iOS } = require('miniprogram-versions');

console.log('The latest version of miniprogram sdk is:', latest);
// 2.10.2

console.log('all versions:', versions);
/*
  [
    { percentage: 10.53967089, sdkVer: '2.10.2' },
    { percentage: 79.2536878236, sdkVer: '2.10.1' },
    { percentage: 0.000947846748524, sdkVer: '2.10.0' },
    { percentage: 3.11367845685, sdkVer: '2.9.5' },
    { percentage: 0.00114645939257, sdkVer: '2.9.4' },
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

更新时间：2020 年 2 月 25 日
