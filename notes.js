// const os = require("os");
// const fs = require("fs");
// var user = os.userInfo();

// fs.appendFileSync("hello.txt" , `hello ${user.username} !`);
console.log("connected");
const fs = require('fs');
var fetchNote = () => {
	try{
		var noteString = fs.readFileSync('notes-data.json');
		return JSON.parse(noteString);
	} catch(e){
	return [];	
	}
};

var saveNote = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNotes = (title, body) => {
	var notes = fetchNote();
	var note = {
		title,
		body
	};
	var duplicateNotes = notes.filter((note) => note.title === title);
	
	if(duplicateNotes.length === 0){
	notes.push(note);
	saveNote(notes);
	return note;
	}
	
};

var getAll = () => {
	return fetchNote();
	// for(var i = 0; i < notes.length; i++){
	// 	return notes[i];
	// }
};

var getNote = (title) => {
	 var notes = fetchNote();
	 var filterNotes = notes.filter((note) => note.title === title);
	 return filterNotes[0];
};

var removeNote = (title) => {
	var notes = fetchNote();
	var filterNotes = notes.filter((note) => note.title !== title);
	saveNote(filterNotes);
	return notes.length !== filterNotes.length;
};

var logNote = (note) => {
	console.log("--");
	console.log(`title: ${note.title}`);
	console.log(`body: ${note.body}`);
}

module.exports = {
	addNotes,
	getAll,
	getNote,
	removeNote,
	logNote
};
