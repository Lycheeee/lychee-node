/* global describe, it, beforeEach */
/* eslint-disable no-unused-vars */

import expect from 'expect';
import Connection from '../src/connection';

describe('Connection', () => {
  describe('#constructor', () => {
    it('should have a correct shape', () => {
      const connection = new Connection();

      expect(connection._client).toBeA('object');
    });
  });
});
