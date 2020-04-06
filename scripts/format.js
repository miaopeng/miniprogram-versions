const fs = require('fs');
const prettier = require('prettier');
const libversions = require('../libversions.json');

fs.writeFileSync(
  'libversions.formatted.json',
  prettier.format(libversions.json_data, { parser: 'json' })
);
