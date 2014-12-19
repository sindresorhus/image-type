# image-type [![Build Status](https://travis-ci.org/sindresorhus/image-type.svg?branch=master)](https://travis-ci.org/sindresorhus/image-type)

> Detect the image type of a Buffer/Uint8Array

See the [file-type](https://github.com/sindresorhus/file-type) module for more file types.


## Install

```sh
$ npm install --save image-type
```


## Usage

##### Node.js

```js
var readChunk = require('read-chunk'); // npm install read-chunk
var imageType = require('image-type');
var buffer = readChunk.sync('unicorn.png', 0, 12);

imageType(buffer);
//=> {ext: 'png', mime: 'image/png'}
```

or from a remote location:

```js
var http = require('http');
var imageType = require('image-type');
var url = 'http://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif';

http.get(url, function (res) {
	res.once('data', function (chunk) {
		res.destroy();
		console.log(imageType(chunk));
		//=> {ext: 'gif', mime: 'image/gif'}
	});
});
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.png');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
	imageType(new Uint8Array(this.response));
	//=> {ext: 'png', mime: 'image/png'}
};

xhr.send();
```


## API

### imageType(buffer)

Returns an object (or `null` when no match) with:

- `ext` - one of the [supported file types](#supported-file-types)
- `mime` - the [MIME type](http://en.wikipedia.org/wiki/Internet_media_type)

#### buffer

Type: `buffer` *(Node.js)*, `uint8array`

It only needs the first 12 bytes.


## CLI

```sh
$ npm install --global image-type
```

```sh
$ image-type --help

  Usage
    image-type <filename>
    cat <filename> | image-type

  Example
    cat unicorn.png | image-type
    png
```


## Supported file types

- `jpg`
- `png`
- `gif`
- `webp`
- `tif`
- `bmp`
- `jxr`
- `psd`

*SVG isn't included as it requires the whole file to be read, but you can get it [here](https://github.com/sindresorhus/is-svg).*


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
