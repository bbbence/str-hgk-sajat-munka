const fs = require('fs');
const reader = require('./reader');
const path = require('path');

const Logger = require('./Logger');
const logger = new Logger();

if (process.argv.length < 3 ) {
    logger.emit('error', 'Error: parameter required!')
    process.exit();
}

const fileName = process.argv [2];
const copyName = path.basename(fileName, '.txt').concat(' Copy.txt');

const { readContent } = reader(logger)

logger.on('read', readContent)
logger.on('print', content => {
    content = content
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    fs.writeFile(copyName, content, function (err) {
        if (err) {
            logger.error(err);
        } else {
            logger.emit('close');
        }
    });
})

logger.on('close', () => {logger.success('File transform successful')})
logger.on('error', (err) => {logger.error(err.message)})




logger.emit('read', fileName);