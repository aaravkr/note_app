const fs = require('fs');
var originalNote = {
  title: 'some title',
  body:'some body'
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var notestring = fs.readFileSync('notes.json');
var note =  JSON.parse(notestring);
console.log(typeof note);
console.log(note.title);
