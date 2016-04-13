'use strict';

module.exports = {
	extends: ['xo', 'xo-space/esnext', 'xo-space/react'],
	env: {
		browser: true,
		node: true,
	},
	globals: {
		'__CLIENT__': true,
		'__PRODUCTION__': true
	},
	rules: {
		curly: [2, 'multi-line']
	}
};
