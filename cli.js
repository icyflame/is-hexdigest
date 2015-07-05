#!/usr/bin/env node
'use strict';
var meow = require('meow');
var logSymbols = require('log-symbols');
var isHexdigest = require('./');

var cli = meow({
  help: [
    'Usage',
    '  is-hexdigest [input]',

    'Example',
    '  is-hexdigest d2c7c27b030372002c9ccab9a0d4c158e7e0c278 --sha1',
    '  ✔ Valid sha1 checksum',

    '  is-hexdigest notahash --md5',
    '  ✖ Invalid md5 checksum',

    'Options',
    '  --sha256 Check if string is a sha256 checksum (default)',
    '  --sha1   Check if string is a sha1 checksum',
    '  --md5    Check if the string is a md5 checksum',
    ''
  ].join('\n')
});

var type;

if (cli.flags.sha1) {
  type = 'sha1';
} else if (cli.flags.md5) {
  type = 'md5';
} else {
  type = 'sha256';
}

if (cli.input.length > 0) {
  console.log((isHexdigest(cli.input[0], type) ?
    (logSymbols.success + ' Valid ') :
    (logSymbols.error + ' Invalid ')) + type + ' checksum');
} else {
  console.log('Please provide a string as an argument.');
}
