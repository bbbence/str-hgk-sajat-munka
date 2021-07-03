const fs = require('fs');

const createDirectory = ( dir ) => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

const createFile = (fileName) => {
    if (!fs.existsSync(fileName)) { 
        fs.writeFile(fileName, '', function (err) {
            if (err) throw err;
        });
    }
}

createDirectory ('./controllers');
createFile ('./controllers/site.controller.js');

createDirectory ('./routers');
createFile ('./routers/site.router.js');

createDirectory ('./views');
createFile ('./views/index.html');

createFile ('./app.js');
