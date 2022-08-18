const stringLength = require('../task1');

test('expected length for congrats to be 7', () => {
  expect(stringLength('congrat')).toBe(7);
})

test('expected to throw Error', () => {
  expect(() => {stringLength('congratulation')}).toThrow();
})