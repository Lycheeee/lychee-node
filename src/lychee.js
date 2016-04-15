class Lychee {
  /**
   * Create a Lychee PTT client
   * @param {Object} account - The account info
   * @param {string} account.username - The username of the account
   * @param {string} account.password - The password of the account
   */
  constructor(account = {}) {
    const { username, password } = account;

    if (!username) { throw new Error('#constructor: no username'); }
    if (!password) { throw new Error('#constructor: no password'); }

    this.username = username;
    this.password = password;
  }
}

export default Lychee;
