import {expectType} from 'tsd';
import imageType = require('.');
import {ImageTypeResult, ImageType} from '.';

imageType(Buffer.from([0xff, 0xd8, 0xff]));
imageType(new Uint8Array([0xff, 0xd8, 0xff]));

expectType<ImageTypeResult | null>(imageType(Buffer.from([0xff, 0xd8, 0xff])));
expectType<ImageTypeResult | null>(
	imageType(new Uint8Array([0xff, 0xd8, 0xff]))
);

const result = imageType(Buffer.from([0xff, 0xd8, 0xff]));
if (result != null) {
	expectType<ImageType>(result.ext);
	expectType<string>(result.mime);
}

expectType<number>(imageType.minimumBytes);
