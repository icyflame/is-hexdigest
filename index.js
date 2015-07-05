'use strict';
module.exports = function (str, opts) {
  if (opts === 'sha1') {
    return str.match('[a-fA-F0-9]{40}') !== null;
  } else if (opts === 'md5') {
    return str.match('[a-fA-F0-9]{32}') !== null;
  } else {
    return str.match('[a-fA-F0-9]{64}') !== null;
  }
};
