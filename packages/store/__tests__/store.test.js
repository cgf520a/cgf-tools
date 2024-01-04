'use strict';

const store = require('..');
const assert = require('assert').strict;

assert.strictEqual(store(), 'Hello from store');
console.info('store tests passed');
