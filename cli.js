#!/usr/bin/env node
'use strict';
var readChunk = require('read-chunk');
var pkg = require('./package.json');
var imageType = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    image-type <filename>',
		'    cat <filename> | image-type',
		'',
		'  Example',
		'    cat unicorn.png | image-type',
		'    png'
	].join('\n'));
}

function init(data) {
	var type = imageType(data);

	if (type) {
		console.log(type);
	} else {
		console.error('Unrecognized image type');
		process.exit(65);
	}
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}

	init(readChunk.sync(input, 0, 12));
} else {
	process.stdin.once('data', init);
}
