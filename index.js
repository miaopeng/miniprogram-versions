const libversions = require('./libversions.json');

const data = JSON.parse(libversions.json_data);
const { total, android, iOS } = data;
const latest = total[0].sdkVer;
const sortedByPercent = [...total].sort((a, b) => b.percentage - a.percentage);
const mostPopular = sortedByPercent[0].sdkVer;

android.latest = android[0].sdkVer;
iOS.latest = iOS[0].sdkVer;

module.exports = {
  android,
  iOS,
  latest,
  mostPopular,
  sortedByPercent,
  versions: total
};
