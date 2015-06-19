#!/usr/bin/env node
'use strict';
var readChunk = require('read-chunk');
var meow = require('meow');
var imageType = require('./');

var cli = meow({
	help: [
		'Usage',
		'  image-type <filename>',
		'  image-type < <filename>',
		'',
		'Example',
		'  image-type < unicorn.png',
		'  png'
	]
});

function init(data) {
	var type = imageType(data);

	if (!type) {
		console.error('Unrecognized image type');
		process.exit(65);
	}

	console.log(type);
}

if (process.stdin.isTTY) {
	if (cli.input.length === 0) {
		console.error('Specify a filename');
		process.exit(1);
	}

	init(readChunk.sync(cli.input[0], 0, 12));
} else {
	process.stdin.once('data', init);
}
