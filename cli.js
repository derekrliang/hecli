#!/usr/bin/env node
'use strict';

const meow = require('meow');
const hecli = require('./');

const cli = meow(`
	Usage
		$ hecli

	Examples
		$ hecli
`);

hecli();

if (cli.input.length > 0) {
	console.log(cli.input);
	return;
}
