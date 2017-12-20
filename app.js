console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('command: ', command);
console.log('Process' , process.argv);
console.log('yargs', argv);

if(command === 'add'){
  notes.addNod(argv.title, argv.body);

} else if (command === 'list') {
notes.getall();
}else if (command === 'read') {
notes.getnote(argv.title);
}else if (command === 'remove') {
notes.removenote(argv.title);
}else {
  console.log('command not listed');
}
