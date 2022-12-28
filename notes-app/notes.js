const fs = require("fs");
const chalk = require("chalk");

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((el) => el.title === title);
  if (note) {
    console.log(chalk.green(`${note.title}`), "\n", note.body);
  } else {
    console.log(chalk.red("No such note"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((el) => el.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bold.green("note was succsesfully added"));
  } else {
    console.log(chalk.bold.red("title note already exist"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((el) => el.title != title);
  if (notes.length !== newNotes.length) {
    saveNotes(newNotes);
    console.log(
      chalk.bold.bgGreen(`note with title:${title} was  succsesfully removed`),
    );
  } else {
    console.log(
      chalk.bold.bgRed.blue(`note with title:${title} does not exist`),
    );
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length) {
    console.log(chalk.blue("Your notes: "));
    notes.forEach((note) => console.log(chalk.green(`${note.title}`)));
  } else {
    console.log(chalk.bgRed("You have no notes"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

module.exports = {
  readNote: readNote,
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
};
