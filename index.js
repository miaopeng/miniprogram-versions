const libversions = require('./libversions.json');

const data = JSON.parse(libversions.json_data);
const { total, android, iOS } = data;
const latest = total[0].sdkVer;
android.latest = android[0].sdkVer;
iOS.latest = iOS[0].sdkVer;

module.exports = {
  latest,
  versions: total,
  android,
  iOS
};
