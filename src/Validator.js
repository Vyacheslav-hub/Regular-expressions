export default class Validator {
  static validateUsername(username) {
    return /^[a-zA-Z](?!.*\d{4,})[a-zA-Z0-9-_]*[a-zA-Z]$/.test(username);
  }
}
