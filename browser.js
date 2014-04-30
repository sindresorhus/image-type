!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.imageType=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf) {
		return false;
	}

	if (_dereq_('is-jpg')(buf)) {
		return 'jpg';
	}

	if (_dereq_('is-png')(buf)) {
		return 'png';
	}

	if (_dereq_('is-gif')(buf)) {
		return 'gif';
	}

	if (_dereq_('is-webp')(buf)) {
		return 'webp';
	}

	if (_dereq_('is-tif')(buf)) {
		return 'tif';
	}

	if (_dereq_('is-bmp')(buf)) {
		return 'bmp';
	}

	if (_dereq_('is-jxr')(buf)) {
		return 'jxr';
	}

	if (_dereq_('is-psd')(buf)) {
		return 'psd';
	}

	return false;
};

},{"is-bmp":2,"is-gif":3,"is-jpg":4,"is-jxr":5,"is-png":6,"is-psd":7,"is-tif":8,"is-webp":9}],2:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 2) {
		return false;
	}

	return buf[0] === 66 && buf[1] === 77;
};

},{}],3:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 3) {
		return false;
	}

	return buf[0] === 71 &&
		buf[1] === 73 &&
		buf[2] === 70;
};

},{}],4:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 3) {
		return false;
	}

	return buf[0] === 255 &&
		buf[1] === 216 &&
		buf[2] === 255;
};

},{}],5:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 3) {
		return false;
	}

	return buf[0] === 73 &&
		buf[1] === 73 &&
		buf[2] === 188;
};

},{}],6:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 4) {
		return false;
	}

	return buf[0] === 137 &&
		buf[1] === 80 &&
		buf[2] === 78 &&
		buf[3] === 71;
};

},{}],7:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 4) {
		return false;
	}

	return buf[0] === 56 &&
		buf[1] === 66 &&
		buf[2] === 80 &&
		buf[3] === 83;
};

},{}],8:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 4) {
		return false;
	}

	return buf[0] === 73 &&
		buf[1] === 73 &&
		buf[2] === 42 &&
		buf[3] === 0;
};

},{}],9:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 12) {
		return false;
	}

	return buf[8] === 87 &&
		buf[9] === 69 &&
		buf[10] === 66 &&
		buf[11] === 80;
};

},{}]},{},[1])
(1)
});