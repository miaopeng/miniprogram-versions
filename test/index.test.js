const { latest, versions } = require('..');

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
