'use strict';
var fileType = require('file-type');

module.exports = function (buf) {
	var imageExts = [
		'jpg',
		'png',
		'gif',
		'webp',
		'tif',
		'bmp',
		'jxr',
		'psd'
	];

	var ret = fileType(buf);

	return imageExts.indexOf(ret && ret.ext) !== -1 ? ret : null;
};
