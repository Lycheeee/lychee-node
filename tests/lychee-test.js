/* global describe, it, beforeEach */
/* eslint-disable no-unused-vars */

import expect from 'expect';
import Lychee from '../src/lychee';

describe('Lychee', () => {
  describe('#constructor', () => {
    it('should have correct shape', () => {
      expect(() => {
        const ptt = new Lychee({
          username: 'username',
          password: 'password',
        });
        expect(ptt._username).toEqual('username');
        expect(ptt._password).toEqual('password');
        expect(ptt._connection).toNotExist();
      }).toNotThrow();

      expect(() => {
        const ptt = new Lychee({
          username: 'username',
        });
      }).toThrow(/#constructor.*/);

      expect(() => {
        const ptt = new Lychee({
          password: 'password',
        });
      }).toThrow(/#constructor.*/);
    });
  });

  describe('#connect', () => {
    let ptt;

    beforeEach(() => {
      ptt = new Lychee({
        username: 'username',
        password: 'password',
      });
    });

    it('should be a function', () => {
      expect(ptt.connect).toBeA('function');
    });

    it('should set up _connection', () => {
      ptt.connect();

      expect(ptt._connection).toExist();
    });

    it('should set up a new connection when making multiple calls', () => {
      ptt.connect();
      const oldConnection = ptt._connection;

      ptt.connect();
      const newConnection = ptt._connection;

      expect(newConnection).toExist();
      expect(newConnection !== oldConnection).toEqual(true);
    });
  });

  describe('#disconnect', () => {
    let ptt;

    beforeEach(() => {
      ptt = new Lychee({
        username: 'username',
        password: 'password',
      });
    });

    it('should be a function', () => {
      expect(ptt.disconnect).toBeA('function');
    });

    it('should tear down _connection', () => {
      ptt.connect();
      ptt.disconnect();

      expect(ptt._connection).toNotExist();
    });
  });
});
