import {expectType} from 'tsd';
import imageType, {minimumBytes, type ImageTypeResult, type ImageFileExtension} from './index.js';

await imageType(new Uint8Array([0xFF, 0xD8, 0xFF]));

expectType<Promise<ImageTypeResult | undefined>>(imageType(new Uint8Array([0xFF, 0xD8, 0xFF])));

const result = await imageType(new Uint8Array([0xFF, 0xD8, 0xFF]));
if (result !== undefined) {
	expectType<ImageFileExtension>(result.ext);
	expectType<string>(result.mime);
}

expectType<number>(minimumBytes);
