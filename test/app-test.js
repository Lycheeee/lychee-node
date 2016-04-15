/* global describe, it */

import expect from 'expect';

describe('suite', () => {
  it('should pass the dummy test', done => {
    expect(true).toEqual(true, 'Gotcha');
    done();
  });
});
