const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return 'Your notes..';
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added!'));
    }
    else {
        console.log(chalk.bgRed('Note title taken!'));
    }
    
    console.log(notes);
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);
    if(newNotes.length === notes.length) {
        console.log(chalk.bgRed('Note does not exists!'));
    }
    else {
        console.log(chalk.bgGreen('Note removed!'));
        saveNotes(newNotes);
    }
    console.log(newNotes);
}

const listNotes = () => {
    console.log(loadNotes());
}
const loadNotes = () => {
    try {

       const dataBuffer = fs.readFileSync('notes.json');
       const dataJson = dataBuffer.toString();
       return JSON.parse(dataJson);
    } catch(e) {
        return [];
    }
}

const readNote = (title) => {
    const note = loadNotes().find((note) => note.title === title);
    if(note)
        console.log(note);
    else
        console.log(chalk.bgRed('Note does not exists!'));
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}