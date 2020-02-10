const { latest, versions } = require('..');

test('should have latest version', () => {
  expect(typeof latest).toBe('string');
  expect(/^\d+.\d+.\d+$/.test(latest)).toBeTruthy();
});

test('should have all versions array', () => {
  expect(Array.isArray(versions)).toBeTruthy();
  expect(versions.length).toBeGreaterThan(0);
});
