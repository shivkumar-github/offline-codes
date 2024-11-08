const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding:'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => { // event
// 	console.log('---- new chunk ----');
// 	// console.log(chunk.toString())
// 	console.log(chunk)
// 	writeStream.write('\n chunk \n');
// })

// shorter way to read and write
// piping
readStream.pipe(writeStream);