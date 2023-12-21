const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

yargs.version('1.1.0');

// Adding commands

yargs.command({
    command: 'add',
    description: 'adds a note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    description: 'removes a note',
    builder:{
        title:{
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
       notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'read',
    description: 'reads a note',
    builder:{
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
       notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    description: 'lists all note',
    handler: () => {
       notes.listNotes();
    }
});

yargs.parse();