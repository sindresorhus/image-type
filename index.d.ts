import {type Buffer} from 'node:buffer';

export type ImageFileExtension =
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
	| 'dcm'
	| 'avif';

export type ImageTypeResult = {
	/**
	One of the supported [file types](https://github.com/sindresorhus/image-type#supported-file-types).
	*/
	ext: ImageFileExtension;

	/**
	The detected [MIME type](https://en.wikipedia.org/wiki/Internet_media_type).
	*/
	mime: string;
};

/**
Detect the image type of a `Buffer`/`Uint8Array`.

@param input - Input for which to determine the file type. It only needs the first `minimumBytes` amount of bytes.

@example
```
import {readChunk} from 'read-chunk';
import imageType, {minimumBytes} from 'image-type';

const buffer = await readChunk('unicorn.png', {length: minimumBytes});

await imageType(buffer);
//=> {ext: 'png', mime: 'image/png'}
```

@example
```
import https from 'node:https';
import imageType, {minimumBytes} from 'image-type';

const url = 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg';

https.get(url, response => {
	response.on('readable', () => {
		(async () => {
			const chunk = response.read(minimumBytes);
			response.destroy();
			console.log(await imageType(chunk));
			//=> {ext: 'jpg', mime: 'image/jpeg'}
		})();
	});
});
```
*/
export default function imageType(input: Buffer | Uint8Array): Promise<ImageTypeResult | undefined>;

/**
The minimum amount of bytes needed to detect a file type. Currently, it's 4100 bytes, but it can change, so don't hard-code it.
*/
export const minimumBytes: number;
