import test from 'ava';
import {readChunkSync} from 'read-chunk';
import imageType, {minimumBytes} from './index.js';

const check = async filename => {
	const {ext} = await imageType(readChunkSync(filename, {length: minimumBytes}));
	return ext;
};

test('main', async t => {
	t.is(await check('fixture.png'), 'png');
	t.is(await check('fixture.psd'), 'psd');
});
