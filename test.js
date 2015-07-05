/* global it */
'use strict';
var assert = require('assert');
var isHexdigest = require('./');

it('should work for all three types', function () {
  // should detect the hashes
  // Hash generated using string 'peaceout'
  assert.strictEqual(isHexdigest('e70a8ab8c27b0fb75aa11a8f8ec4c4731bd26df9d94b2a7cddb5bdb4ec757286'), true);
  assert.strictEqual(isHexdigest('d2c7c27b030372002c9ccab9a0d4c158e7e0c278', 'sha1'), true);
  assert.strictEqual(isHexdigest('fbdcee64a2398cfead7d65f5d18bc35e', 'md5'), true);

  // should detect stray characters
  assert.strictEqual(isHexdigest('e70a8ab8c27b0fb75aa11a8f8ec4c473gbd26df9d94b2a7cddb5bd4ec75728t'), false);
  assert.strictEqual(isHexdigest('d2c7c27b030372002c9ccab9a0d4c158g7e0c27z', 'sha1'), false);
  assert.strictEqual(isHexdigest('fbdcee64a2398cfzad7d65f5d18bc35g', 'md5'), false);

  // should detect wrong lengths
  assert.strictEqual(isHexdigest('e70a88c27b0fb75aa11a8f8ec4c473gbd26df9d94b2a7cddb5bd4ec75728t'), false);
  assert.strictEqual(isHexdigest('d227b030372002c9ccab9a0d4c158g7e0c27z', 'sha1'), false);
  assert.strictEqual(isHexdigest('fbzad7d65f5d18bc35g', 'md5'), false);
});
