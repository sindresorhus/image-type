import test from 'ava';
import readChunk from 'read-chunk';
import m from './';

const check = filename => m(readChunk.sync(filename, 0, 12)).ext;

test(t => {
	t.is(check('fixture.png'), 'png');
	t.is(check('fixture.psd'), 'psd');
});
