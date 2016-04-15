/* global describe, it */

import expect from 'expect';
import Lychee from '../src/lychee';

describe('Lychee', () => {
  describe('#constructor', () => {
    it('should have correct shape of account', () => {
      expect(() => {
        // eslint-disable-next-line no-unused-vars
        const ptt = new Lychee({
          username: 'username',
          password: 'password',
        });
      }).toNotThrow();

      expect(() => {
        // eslint-disable-next-line no-unused-vars
        const ptt = new Lychee({
          username: 'username',
        });
      }).toThrow(/#constructor.*/);

      expect(() => {
        // eslint-disable-next-line no-unused-vars
        const ptt = new Lychee({
          password: 'password',
        });
      }).toThrow(/#constructor.*/);
    });
  });
});
