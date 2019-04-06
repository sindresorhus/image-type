/// <reference types="node"/>

declare namespace imageType {
	type ImageType =
		| 'jpg'
		| 'png'
		| 'gif'
		| 'webp'
		| 'flif'
		| 'cr2'
		| 'tif'
		| 'bmp'
		| 'jxr'
		| 'psd'
		| 'ico'
		| 'bpg'
		| 'jp2'
		| 'jpm'
		| 'jpx'
		| 'heic'
		| 'cur'
		| 'dcm';

	interface ImageTypeResult {
		/**
		One of the supported [file types](https://github.com/sindresorhus/image-type#supported-file-types).
		*/
		ext: ImageType;

		/**
		The detected [MIME type](https://en.wikipedia.org/wiki/Internet_media_type).
		*/
		mime: string;
	}
}

declare const imageType: {
	/**
	Detect the image type of a `Buffer`/`Uint8Array`.

	@param input - Input to examine to determine the file type. It only needs the first `.minimumBytes` bytes.

	@example
	```
	import readChunk = require('read-chunk');
	import imageType = require('image-type');

	const buffer = readChunk.sync('unicorn.png', 0, 12);

	imageType(buffer);
	//=> {ext: 'png', mime: 'image/png'}


	// Or from a remote location:
	import * as http from 'http';

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
	*/
	(input: Buffer | Uint8Array): imageType.ImageTypeResult | null;

	/**
	The minimum amount of bytes needed to detect a file type. Currently, it's 4100 bytes, but it can change, so don't hard-code it.
	*/
	readonly minimumBytes: number;

	// TODO: Remove this for the next major release
	default: typeof imageType;
};

export = imageType;
