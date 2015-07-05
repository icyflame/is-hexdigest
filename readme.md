# is-hexdigest

> Check if a string is a valid SHA1, MD5 or SHA256 checksum

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
```

**By default, it will check if the given string is a SHA256 checksum.**

## CLI

```
$ npm install --global is-hexdigest
```
```
$ is-hexdigest --help

  Usage
    is-hexdigest [input]

  Example
    is-hexdigest d2c7c27b030372002c9ccab9a0d4c158e7e0c278 --sha1
    ✔ Valid sha1 checksum

    is-hexdigest notahash --md5
    ✖ Invalid md5 checksum

  Options
    --sha256 Check if string is a sha256 checksum (default)
    --sha1   Check if string is a sha1 checksum
    --md5    Check if the string is a md5 checksum
```


## API

### isHexdigest(input, [options])

#### input

*Required*  
Type: `string`

The string to be checked

#### options

##### type

Type: `string`  
Default: `sha256`  
Options: `sha256`, `sha1`, `md5`

The type of hash to be checked


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
