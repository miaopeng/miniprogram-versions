const libversions = require('./libversions.json');

const data = JSON.parse(libversions.json_data);
const versions = data.total;
const latest = versions[0].sdkVer;

module.exports = {
  latest,
  versions
};
