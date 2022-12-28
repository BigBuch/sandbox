const fs  = require("fs");
const fname = '1-json.json';

const dataBuffer = fs.readFileSync(fname).toString();
const newData =  JSON.parse(dataBuffer);

newData.name = 'Ros';
newData.planet = 'Earth';
newData.age=43;

fs.writeFileSync(fname, JSON.stringify(newData));








// console.log(dataBuffer.toString());
// const book = {
//     title: 'Monte Kristo',
//     author: 'Duma'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// fs.writeFileSync('1-json.json', bookJSON);