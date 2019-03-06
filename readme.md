# image-type [![Build Status](https://travis-ci.org/sindresorhus/image-type.svg?branch=master)](https://travis-ci.org/sindresorhus/image-type)

> Detect the image type of a Buffer/Uint8Array

See the [`file-type`](https://github.com/sindresorhus/file-type) module for more file types and a CLI.


## Install

```
$ npm install image-type
```


## Usage

##### Node.js

```js
const readChunk = require('read-chunk');
const imageType = require('image-type');

const buffer = readChunk.sync('unicorn.png', 0, 12);

imageType(buffer);
//=> {ext: 'png', mime: 'image/png'}
```

Or from a remote location:

```js
const http = require('http');
const imageType = require('image-type');

const url = 'https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif';

http.get(url, response => {
	response.on('readable', () => {
		const chunk = response.read(imageType.minimumBytes);
		response.destroy();
		console.log(imageType(chunk));
		//=> {ext: 'gif', mime: 'image/gif'}
	});
});
```

##### Browser

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'unicorn.png');
xhr.responseType = 'arraybuffer';

xhr.onload = () => {
	imageType(new Uint8Array(this.response));
	//=> {ext: 'png', mime: 'image/png'}
};

xhr.send();
```


## API

### imageType(input)

Returns an `Object` with:

- `ext` - One of the [supported file types](#supported-file-types)
- `mime` - The [MIME type](http://en.wikipedia.org/wiki/Internet_media_type)

Or `null` when there is no match.

#### input

Type: `Buffer | Uint8Array`

It only needs the first `.minimumBytes` bytes.

### imageType.minimumBytes

Type: `number`

The minimum amount of bytes needed to detect a file type. Currently, it's 4100 bytes, but it can change, so don't hardcode it.


## Supported file types

- [`jpg`](https://en.wikipedia.org/wiki/JPEG)
- [`png`](https://en.wikipedia.org/wiki/Portable_Network_Graphics)
- [`gif`](https://en.wikipedia.org/wiki/GIF)
- [`webp`](https://en.wikipedia.org/wiki/WebP)
- [`flif`](https://en.wikipedia.org/wiki/Free_Lossless_Image_Format)
- [`cr2`](https://fileinfo.com/extension/cr2)
- [`tif`](https://en.wikipedia.org/wiki/Tagged_Image_File_Format)
- [`bmp`](https://en.wikipedia.org/wiki/BMP_file_format)
- [`jxr`](https://en.wikipedia.org/wiki/JPEG_XR)
- [`psd`](https://en.wikipedia.org/wiki/Adobe_Photoshop#File_format)
- [`ico`](https://en.wikipedia.org/wiki/ICO_(file_format))
- [`bpg`](https://bellard.org/bpg/)
- [`jp2`](https://en.wikipedia.org/wiki/JPEG_2000) - JPEG 2000
- [`jpm`](https://en.wikipedia.org/wiki/JPEG_2000) - JPEG 2000
- [`jpx`](https://en.wikipedia.org/wiki/JPEG_2000) - JPEG 2000
- [`heic`](https://nokiatech.github.io/heif/technical.html)
- [`cur`](https://en.wikipedia.org/wiki/ICO_(file_format))
- [`dcm`](https://en.wikipedia.org/wiki/DICOM#Data_format) - DICOM Image File

*SVG isn't included as it requires the whole file to be read, but you can get it [here](https://github.com/sindresorhus/is-svg).*


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
