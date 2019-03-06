/// <reference types="node"/>

export type ImageType =
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

export interface ImageTypeResult {
	/**
	 * One of the supported [file types](https://github.com/sindresorhus/image-type#supported-file-types).
	 */
	ext: ImageType;

	/**
	 * The detected [MIME type](https://en.wikipedia.org/wiki/Internet_media_type).
	 */
	mime: string;
}

/**
 * Detect the image type of a `Buffer`/`Uint8Array`.
 *
 * @param input - Input to examine to determine the file type. It only needs the first `.minimumBytes` bytes.
 */
declare const imageType: {
	(input: Buffer | Uint8Array): ImageTypeResult | null;

	/**
	 * The minimum amount of bytes needed to detect a file type. Currently, it's 4100 bytes, but it can change, so don't hard-code it.
	 */
	readonly minimumBytes: number;
};

export default imageType;
