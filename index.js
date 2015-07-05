'use strict';
module.exports = function (str, opts) {
  if (opts === 'sha1') {
    return str.match('[a-fA-F0-9]{40}') !== null && str.length === 40;
  } else if (opts === 'md5') {
    return str.match('[a-fA-F0-9]{32}') !== null && str.length === 32;
  } else {
    return str.match('[a-fA-F0-9]{64}') !== null && str.length === 64;
  }
};
