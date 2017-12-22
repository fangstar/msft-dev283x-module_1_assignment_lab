const fs = require('fs')
const path = require('path')

const csvFilePath='./customer-data.csv';
const csv = require('csvtojson');

const outputJsonFile = 'customer-data.json';

let buffer = [];

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj) => {
  buffer.push(jsonObj);
})
.on('done', (error) => {
  console.log('end')
  fs.writeFileSync(outputJsonFile, JSON.stringify(buffer,null,2));
})
