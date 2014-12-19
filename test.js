'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var imageType = require('./');

function check(filename) {
	return imageType(readChunk.sync(filename, 0, 12)).ext;
}

it('detect image type from a buffer', function () {
	assert.strictEqual(check('fixture.png'), 'png');
	assert.strictEqual(check('fixture.psd'), 'psd');
});
