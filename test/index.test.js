const {
  latest,
  mostPopular,
  sortedByPercent,
  versions,
  android,
  iOS
} = require('..');

console.log('The latest version of miniprogram sdk is:', latest);
console.log('The most populr version of miniprogram sdk is:', mostPopular);
console.log('all versions:', versions);
console.log('sorted versions:', sortedByPercent);

test('should have latest version', () => {
  expect(typeof latest).toBe('string');
  expect(/^\d+.\d+.\d+$/.test(latest)).toBeTruthy();
});

test('should have all versions array', () => {
  expect(Array.isArray(versions)).toBeTruthy();
  expect(versions.length).toBeGreaterThan(0);
});

test('should have android versions', () => {
  expect(Array.isArray(android)).toBeTruthy();
  expect(typeof android.latest).toBe('string');
  expect(/^\d+.\d+.\d+$/.test(android.latest)).toBeTruthy();
});

test('should have iOS versions', () => {
  expect(Array.isArray(iOS)).toBeTruthy();
  expect(typeof iOS.latest).toBe('string');
  expect(/^\d+.\d+.\d+$/.test(iOS.latest)).toBeTruthy();
});

test('should have most pupular version', () => {
  expect(typeof mostPopular).toBe('string');
  const sortedTotal = versions.sort((a, b) => b.percentage - a.percentage);
  expect(mostPopular == sortedTotal[0].sdkVer).toBeTruthy();
});
