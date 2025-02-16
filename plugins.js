const fs = require('fs');
const path = require('path');
const directoryPath = '../plugins';
let jsFileCount = 0;

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        if (file.endsWith('.js')) {
            jsFileCount++;
        }
    });
    console.log(`Found ${jsFileCount} .js files in the directory.`);
});
//𒋲𝑴𝑨𝑺𝑻𝑬𝑹𝑴𝑰𝑵𝑫𒋲
