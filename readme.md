# is-hexdigest

> Find out if the string is the hexdigest of an SHA256, SHA1 or MD5 hash

[![Build Status](https://travis-ci.org/icyflame/is-hexdigest.svg?branch=master)](https://travis-ci.org/icyflame/is-hexdigest)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

## Install

```
$ npm install --save is-hexdigest
```


## Usage

```js
var isHexdigest = require('is-hexdigest');

isHexdigest('e70a8ab8c27b0fb75aa11a8f8ec4c4731bd26df9d94b2a7cddb5bdb4ec757286')
//=> true
isHexdigest('d2c7c27b030372002c9ccab9a0d4c158e7e0c278', 'sha1')
//=> true
isHexdigest('fbdcee64a2398cfead7d65f5d18bc35e', 'md5')
//=> true
```


## API

### isHexdigest(input, [options])

#### input

*Required*  
Type: `string`

The string to be checked, this can be the hash itself or a larger text block
consisting the hash

#### options

##### type

Type: `string`  
Default: `sha256`  
Options: `sha256`, `sha1`, `md5`

The type of hash to be checked


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
