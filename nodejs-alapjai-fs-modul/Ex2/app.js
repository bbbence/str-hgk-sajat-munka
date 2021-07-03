const fs = require('fs');
const zlib = require('zlib');


if (process.argv.length < 3 ) {
    console.log('Error: parameter required!');
    process.exit();
}

const fileName = process.argv [2];
if (!fs.existsSync(fileName)) {
    console.log('Error: file doesnt exist!');
    process.exit();
}

const bakName = fileName + '.bak';
const gzName = bakName + '.gz';

fs.copyFileSync(fileName, bakName);

const fileContents = fs.createReadStream(bakName);
const writeStream = fs.createWriteStream(gzName);
const zip = zlib.createGzip();

fileContents.pipe(zip).pipe(writeStream).on('finish', () => {
    fs.unlinkSync(fileName);
    fs.unlinkSync(bakName);
});