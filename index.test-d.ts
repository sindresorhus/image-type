import {expectType} from 'tsd-check';
import imageType, {ImageTypeResult, ImageType} from '.';

imageType(new Buffer([0xff, 0xd8, 0xff]));
imageType(new Uint8Array([0xff, 0xd8, 0xff]));

expectType<ImageTypeResult | null>(imageType(new Buffer([0xff, 0xd8, 0xff])));
expectType<ImageTypeResult | null>(
	imageType(new Uint8Array([0xff, 0xd8, 0xff]))
);

const result = imageType(new Buffer([0xff, 0xd8, 0xff]));
if (result != null) {
	expectType<ImageType>(result.ext);
	expectType<string>(result.mime);
}

expectType<number>(imageType.minimumBytes);
