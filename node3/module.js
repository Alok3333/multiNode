const path = require('path');
const fs = require('fs');
const os = require('os');
const Emitter = require('events');


const myEvent = new Emitter();

myEvent.on('someone', (data) => {
    console.log(data);
})

myEvent.emit('someone', {
    name: "Alok Prajapati",
    location: "Benguluru",
});

// const ostype = os.type();
// const ostype = os.platform();
// const ostype = os.arch();
// const ostype = os.hostname();
// const ostype = os.freemem();
// const ostype = os.version();
// const ostype = os.release();
// const ostype = os.uptime();
// const ostype = os.totalmem();
// console.log(ostype);


// create Folder with fs module
// fs.mkdir(path.join(__dirname, '/test'), (err) => {
//     if(err) {
//         console.log(err,'something went wrong...');
//         return
//     }
//     else {
//         console.log('Folder Created!');
//     }
// })

// create File with fs module
// fs.writeFile(path.join(__dirname, 'test', 'text.txt'), 'Created File for testing', (err) => {
//     if(err) {
//         throw err
//     }
//     else{
//         console.log('Created File');
//     }
// })

// create a code to readFile
// fs.readFile(path.join(__dirname,'test','text.txt'), (err, data) => {
//     if (err) {
//         throw err
//     }
//     else
//     {
//         console.log(data.toString());
//     }
// })

// const folderName = `Folder name: ${path.join(__dirname, 'order', 'app.js')}`

// console.log('parse: ',path.parse(__filename));

// console.log(folderName);

module.exports = path;