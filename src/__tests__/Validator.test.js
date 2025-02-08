import Validator from '../Validator';
test.each([
  ['validName', true],
  ['valid_name-123', true],
  ['123invalid', false], // начинается с цифры
  ['invalid_', false], // заканчивается на _
  ['name1234', false], // более 3 цифр подряд
  ['name-_-name', true],
  ['na1111me', false], // более 3 цифр подряд
])('validateUsername(%s) should return %s', (username, expected) => {
  expect(Validator.validateUsername(username)).toBe(expected);
});
