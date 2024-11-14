const fs = require('fs');

// // reading files
// fs.readFile('./docs/blog1.txt', (e, data) => {
// 	if (e) {
// 		console.log(e);
// 	}
// 	console.log(data.toString());
// });

// // console.log('last line');

// // writing file
// fs.writeFile('./docs/blog1.txt', 'this is newly written text', (e) => {
// 	// if (e) console.log(e);
// 	console.log('file was written');

// });

// if (!fs.existsSync('./assets')) { // if file doesn't exists already.
// 	fs.mkdir('./assets', (err) => {
// 		if (err) console.log(err);
// 		console.log('folder created');
// 	})
// }
// else {
// 	fs.rmdir('./assets', (err) => {
// 		if (err) console.log(err);
// 		else console.log('created');
// 	})
// }

// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
	fs.unlink('./docs/deleteme.txt', (err) => {
		if (err) console.log(err);
		else console.log('file deleted');
	});
}