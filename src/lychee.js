import Connection from './connection';

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

    this._username = username;
    this._password = password;
  }

  /**
   * Set up connection
   * @param {boolean} refresh - The flag to indicate whether connection should be re-init or not
   */
  connect(refresh) {
    if (this._connection) {
      if (!refresh) {
        return;
      }
      this.disconnect();
    }
    this._connection = new Connection();
  }

  /**
   * Tear down connection
   */
  disconnect() {
    this._connection.end();
    delete this._connection;
  }
}

export default Lychee;
