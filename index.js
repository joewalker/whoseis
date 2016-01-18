#!/usr/local/bin/node

var whoseis = require('./whoseis').whoseis;

var file = process.argv[2];

var owners = whoseis(process.argv[2]);

var leaf = file.split('/').slice(-1);

console.log(leaf + ' is owned by ' + owners.join('\n'));
