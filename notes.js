console.log('starting notes.js');
const fs = require('fs');
var addNod = (title,body) => {
var notes = [];
var note = {
title,
body
};
try {
var notesString = fs.readFileSync('notes-data.json');
 notes = JSON.parse(notesString);
} catch(e){

}
notes.push(note);
fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getall = () =>{
  console.log('getting all notes')
}
var getnote = () =>{
  console.log('reading all notes')
}
var removenote = () =>{
  console.log('removing all notes')
}
module.exports = {
  addNod,
  getall,
  getnote,
  removenote
};
