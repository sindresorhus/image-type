import test from 'ava';
import readChunk from 'read-chunk';
import imageType from '.';

const check = filename => imageType(readChunk.sync(filename, 0, 12)).ext;

test('main', t => {
	t.is(check('fixture.png'), 'png');
	t.is(check('fixture.psd'), 'psd');
});
