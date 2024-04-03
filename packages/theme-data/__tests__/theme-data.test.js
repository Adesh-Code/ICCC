'use strict';

const themeData = require('..');
const assert = require('assert').strict;

assert.strictEqual(themeData(), 'Hello from themeData');
console.info('themeData tests passed');
