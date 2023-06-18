const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt`;

// Create file
// fs.writeFileSync(filePath,"This is new file of CRUD"); 

// Read file
// fs.readFile(filePath,'utf-8',(err, data) => {
//     console.log(data);
// })

// Update file
// fs.appendFile(filePath,' and file name is apple.txt', (err) => {
//     if(!err) console.log("File is updated!");
// })

// Rename file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) => {
//     if(!err) console.log("File name is updated!");
// })

// Delete file
// fs.unlinkSync(`${dirPath}/fruit.txt`)