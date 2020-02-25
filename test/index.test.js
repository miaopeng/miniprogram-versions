const { latest, versions, android, iOS } = require('..');

console.log('The latest version of miniprogram sdk is:', latest);
console.log('all versions:', versions);

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
