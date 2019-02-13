// var but=document.querySelector("button");
// pink = false;
// but.addEventListener("click",changecolor);
// function changecolor(){
	
// 	if(pink){
// 	  document.body.style.background = "white";
//     }
//     else{
// 	   document.body.style.background = "pink";
//     }
//     pink = !pink;
// }
console.log("starting app.js");
const fs = require('fs'); 
const _ = require('lodash');
const welcome = require('./notes.js');
const yargs = require('yargs');

// console.log(dis.add(5,2));


var command = process.argv[2];
const argv = yargs.argv;
console.log('Command:', command);
console.log('yargs:', argv);

if(command === 'add'){
	var note = welcome.addNotes(argv.title , argv.body);
	if(note){
		console.log("Notes created");
		welcome.logNote(note);
	}
	else{
		console.log("Note title not found");
	}
};

if(command === 'list'){
	var list = welcome.getAll();
	//list.forEach((note) => welcome.logNote(note));
	for(var i = 0; i < list.length; i++){
		welcome.logNote(list[i]);
	}
};

if(command === 'read'){
	var readNotes = welcome.getNote(argv.title);
	if(readNotes){
		console.log(`The note is :`);
		welcome.logNote(readNotes);
	}
	else{
		console.log("Note not found");
	}
};

if(command === 'remove'){
	var removed = welcome.removeNote(argv.title);
	if(removed){
		console.log("Notes removed");
	}
	else{
		console.log("Error");
	}
}