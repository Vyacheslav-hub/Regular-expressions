import Validator from '../Validator';

test('valid usernames', () => {
  expect(Validator.validateUsername('ValidUser')).toBe(true);
  expect(Validator.validateUsername('User-Name_1')).toBe(true);
  expect(Validator.validateUsername('Name999')).toBe(true);
});

test('invalid usernames', () => {
  expect(Validator.validateUsername('123Invalid')).toBe(false);
  expect(Validator.validateUsername('_Invalid')).toBe(false);
  expect(Validator.validateUsername('Invalid-')).toBe(false);
  expect(Validator.validateUsername('Name9999')).toBe(false);
});
