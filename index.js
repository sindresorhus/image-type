'use strict';
var dependencies = require('./package.json').dependencies;

module.exports = function (buf) {
	var ext;

	if (!buf || buf.length < 12) {
		return false;
	}

	Object.keys(dependencies).filter(function (dep) {
		return dep.indexOf('is-') !== -1;
	}).forEach(function (dep) {
		if (require(dep)(buf)) {
			ext = dep.replace('is-', '');
		}
	});

	return ext ? ext : false;
};
